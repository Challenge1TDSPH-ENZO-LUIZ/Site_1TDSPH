export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  type: 'patient' | 'doctor' | 'admin';
  phone?: string;
  cpf?: string;
  crm?: string;
  specialty?: string;
}

export interface Appointment {
  id: number;
  patientId: number;
  doctorId: number;
  date: string;
  time: string;
  specialty: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}

export interface MedicalRecord {
  id: number;
  patientId: number;
  doctorId: number;
  date: string;
  diagnosis: string;
  treatment: string;
  notes?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface LoginForm {
  email: string;
  password: string;
  userType: 'patient' | 'doctor' | 'admin';
}

export interface RegisterForm {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
  confirmPassword: string;
  userType: 'patient' | 'doctor';
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialty?: string;
  description: string;
  image?: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}