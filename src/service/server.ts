import { belongsTo, createServer, hasMany, Model, Response, RestSerializer } from 'miragejs';
import { School, SchoolClass } from '../interfaces';

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,

    serializers: {
      application: RestSerializer.extend({
        embed: true,
        include: ['classes'],
      }),
      class: RestSerializer.extend({
        serializeIds: 'always',
        keyForForeignKey: () => 'schoolId',
      }),
    },

    models: {
      school: Model.extend({
        classes: hasMany(),
      }),
      class: Model.extend({
        school: belongsTo('school'),
      }),
    },

    seeds(server) {
      const school1 = server.create('school', {
        id: '1',
        name: 'Escola Técnica Estadual',
        address: 'Rua Principal, 123',
        numClasses: 2,
      } as School);

      const school2 = server.create('school', {
        id: '2',
        name: 'Escola Estadual',
        address: 'Rua B, 123',
        numClasses: 0,
      } as School);

      server.create('class', {
        id: '1',
        name: '3º Ano A',
        classShift: 'matutino',
        year: 2024,
        schoolId: school1.id,
      } as SchoolClass);

      server.create('class', {
        id: '2',
        name: '2º Ano B',
        classShift: 'vespertino',
        year: 2024,
        schoolId: school2.id,
      } as SchoolClass);
    },

    routes() {
      this.namespace = 'api';

      this.get('/schools', (schema) => {
        return schema.all('school');
      });

      this.post('/schools', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.create('school', { ...attrs, numClasses: 0 });
      });

      this.patch('/schools/:id', (schema: any, request) => {
        const id = request.params.id;
        const newAttrs = JSON.parse(request.requestBody);
        const school = schema.find('school', id);

        if (school) {
          return school.update(newAttrs);
        }
        return new Response(404, {}, { error: 'Escola não encontrada' });
      });

      this.delete('/schools/:id', (schema: any, request) => {
        const id = request.params.id;
        const school = schema.find('school', id);

        if (school) {
          school.classes.destroy();
          school.destroy();
          return new Response(204);
        }
        return new Response(404, {}, { error: 'Escola não encontrada' });
      });

      this.get('/classes', (schema) => {
        return schema.all('class');
      });

      this.post('/classes', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);

        return schema.create('class', attrs);
      });

      this.patch('/classes/:id', (schema: any, request) => {
        const id = request.params.id;
        const newAttrs = JSON.parse(request.requestBody);
        const schoolClass = schema.find('class', id);

        if (schoolClass) {
          return schoolClass.update(newAttrs);
        }

        return new Response(404, {}, { error: 'Turma não encontrada' });
      });

      this.delete('/classes/:id', (schema: any, request) => {
        const id = request.params.id;
        const schoolClass = schema.find('class', id);

        if (schoolClass) {
          return schoolClass.destroy();
        }
        return new Response(404, {}, { error: 'Turma não encontrada' });
      });

      this.get('/schools/:id/classes', (schema, request) => {
        const schoolId: string = request.params.id;
        return schema.where('class', (item: any) => item.schoolId === schoolId);
      });
    },
  });
}
