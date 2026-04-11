export type Shifts = "matutino" | "vespertino" | "noturno";

export interface SchoolClass {
  id: string;
  name: string;
  classShift: Shifts;
  year: number;
  schoolId: string;
}

export interface School {
  id: string;
  name: string;
  address: string;
  numClasses: number;
  classes: SchoolClass[];
}

export interface SchoolState {
  schools: School[];
  addSchool: (school: School) => void;
}

export interface ClassesState {
  classes: SchoolClass[];
  addClass: (schoolClass: SchoolClass) => void;
}
