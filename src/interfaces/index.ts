export type Shifts = 'matutino' | 'vespertino' | 'noturno';

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
  isLoading: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  fetchSchools: () => Promise<void>;
  addSchool: (school: School) => Promise<void>;
  editSchool: (id: string, updatedSchool: Partial<School>) => Promise<void>;
  deleteSchool: (id: string) => Promise<void>;
}

export interface ClassesState {
  classes: SchoolClass[];
  isLoading: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  fetchClasses: () => Promise<void>;
  addClass: (schoolClass: SchoolClass) => void;
  editClass: (id: string, updatedSchool: Partial<SchoolClass>) => Promise<void>;
  deleteClass: (id: string) => Promise<void>;
}

export interface HeaderProps {
  title: string;
  subtitle: string;
  placeholder: string;
  setSearchQuery: (text: string) => void;
  searchQuery: string;
}

export interface SearchProps {
  placeholder: string;
  setSearchQuery: (text: string) => void;
  searchQuery: string;
}

export interface ListItemsProps {
  data: School[] | SchoolClass[];
  type: 'school' | 'classes';
  handleEdit: (id: string, updatedData: Partial<School | SchoolClass>) => Promise<void>;
  handleDelete: (id: string) => Promise<void>;
}

export interface CardContentProps {
  selectedColor: 'indigo' | 'emerald' | 'amber' | 'rose';
  subtitle: string;
  qtdClasses: number;
  type: 'school' | 'classes';
}
