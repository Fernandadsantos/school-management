import { ExternalPathString, RelativePathString } from 'expo-router';
import { LucideProps } from 'lucide-react-native';

export type Shifts = 'matutino' | 'vespertino' | 'noturno';
export type colors = 'indigo' | 'emerald' | 'amber' | 'rose';
export type routes =
  | '/(tabs)/schools'
  | RelativePathString
  | ExternalPathString
  | '/_sitemap'
  | `/_sitemap?${string}`
  | `/_sitemap#${string}`
  | '/(tabs)'
  | '/(tabs)/classes'
  | `/(tabs)/classes?${string}`
  | `/(tabs)/classes#${string}`
  | '/classes'
  | `/classes?${string}`
  | `/classes#${string}`
  | `/(tabs)?${string}`
  | `/(tabs)#${string}`
  | '/'
  | `/?${string}`
  | `/#${string}`
  | `/(tabs)/schools?${string}`
  | `/(tabs)/schools#${string}`
  | '/schools'
  | `/schools?${string}`
  | `/schools#${string}`
  | '/classes/class'
  | `/classes/class?${string}`
  | `/classes/class#${string}`
  | '/classes/createClass'
  | `/classes/createClass?${string}`
  | `/classes/createClass#${string}`
  | '/home/home'
  | `/home/home?${string}`
  | `/home/home#${string}`
  | '/school/createSchool'
  | `/school/createSchool?${string}`
  | `/school/createSchool#${string}`
  | '/school/school'
  | `/school/school?${string}`;

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

export type FormDataClass = {
  name: string;
  classShift: Shifts;
  year: number;
};

export interface ClassFormProps {
  initialData?: SchoolClass;
  onSubmit: (data: FormDataClass) => Promise<void>;
}

export interface SchoolFormProps {
  initialData?: School;
  onSubmit: (data: FormDataSchool) => Promise<void>;
}

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
  addClass: (schoolClass: Omit<SchoolClass, 'id'>) => Promise<void>;
  editClass: (id: string, updatedSchool: Partial<SchoolClass>) => Promise<void>;
  deleteClass: (id: string) => Promise<void>;
}

export interface HeaderProps {
  title: string;
  subtitle: string;
  placeholder?: string;
  setSearchQuery?: (text: string) => void;
  searchQuery?: string;
  isDetails?: boolean;
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

export interface ListClassProps {
  data: SchoolClass[];
}

export interface SchoolCardContentProps {
  selectedColor: colors;
  address: string;
  qtdClasses: number;
}

export interface ClassCardContentProps {
  selectedColor: colors;
  shift: Shifts;
}

export interface FloatingBtnProps {
  route: routes;
}

export interface BtnSubmitProps {
  isValid: boolean;
  btnTitle: string;
  handleCreate: (setIsLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
}

export interface BtnConfirmationProps {
  onConfirmDelete: () => Promise<void>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface BtnDeleteClassProps {
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

export interface ModalEditClassProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  item: SchoolClass;
}

export interface BtnEditSchoolProps {
  item: School;
}
export interface BtnEditClassProps {
  item: SchoolClass;
}

export interface AnimatedCardProps {
  label: string;
  value: number;
  theme: 'blue' | 'yellow';
  route: routes;
  Icon: React.ForwardRefExoticComponent<LucideProps & React.RefAttributes<SVGSVGElement>>;
}
export interface MiniCardProps {
  Icon: React.ForwardRefExoticComponent<LucideProps & React.RefAttributes<SVGSVGElement>>;
  title: string;
  subtitle: string;
}
