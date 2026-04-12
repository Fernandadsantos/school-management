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

export type FormDataSchool = {
  name: string;
  address: string;
};

export interface SchoolState {
  schools: School[];
  isLoading: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  fetchSchools: () => Promise<void>;
  getSchoolById: (id: string) => School | undefined;
  addSchool: (school: Omit<School, 'id'>) => Promise<void>;
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

export interface ListSchoolProps {
  data: School[];
  handleEdit: (id: string, updatedData: School) => Promise<void>;
  handleDelete: (id: string) => Promise<void>;
}

export interface SchoolCardContentProps {
  selectedColor: 'indigo' | 'emerald' | 'amber' | 'rose';
  address: string;
  qtdClasses?: number;
}

export interface FloatingBtnProps {
  route: string;
}

export interface HeaderDetailsProps {
  title: string;
  subtitle: string;
}

export interface BtnSubmitProps {
  isValid: boolean;
  btnTitle: string;
  handleCreate: (setIsLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
}

export interface BtnConfirmationProps {
  id: string;
}

export interface ModalDeleteConfirmationProps {
  isOpen: boolean;
  handleClose: () => void;
  onConfirmDelete: () => Promise<void>;
}

export interface ModalEditSchoolProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  item: School;
}

export interface BtnEditSchoolProps {
  item: School;
}
