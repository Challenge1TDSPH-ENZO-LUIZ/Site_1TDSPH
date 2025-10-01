import { User, Appointment, MedicalRecord, Service, TeamMember, FAQ } from '../types';

export const mockUsers: User[] = [
  {
    id: 1,
    name: 'Dr. João Silva',
    email: 'joao@hospital.com',
    password: '123456',
    type: 'doctor',
    crm: '123456',
    specialty: 'Cardiologia'
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@email.com',
    password: '123456',
    type: 'patient',
    cpf: '123.456.789-00',
    phone: '(11) 99999-9999'
  },
  {
    id: 3,
    name: 'Admin Sistema',
    email: 'admin@hospital.com',
    password: 'admin123',
    type: 'admin'
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: 1,
    patientId: 2,
    doctorId: 1,
    date: '2024-10-05',
    time: '14:00',
    specialty: 'Cardiologia',
    status: 'confirmed'
  },
  {
    id: 2,
    patientId: 2,
    doctorId: 1,
    date: '2024-10-10',
    time: '10:00',
    specialty: 'Cardiologia',
    status: 'pending'
  }
];

export const mockMedicalRecords: MedicalRecord[] = [
  {
    id: 1,
    patientId: 2,
    doctorId: 1,
    date: '2024-09-15',
    diagnosis: 'Hipertensão arterial',
    treatment: 'Medicação prescrita',
    notes: 'Retorno em 30 dias'
  }
];

export const services: Service[] = [
  {
    id: 1,
    icon: 'fas fa-stethoscope',
    title: 'Consultas Médicas',
    description: 'Agendamento online de consultas com especialistas'
  },
  {
    id: 2,
    icon: 'fas fa-x-ray',
    title: 'Exames',
    description: 'Laboratórios e imagem com resultados rápidos'
  },
  {
    id: 3,
    icon: 'fas fa-ambulance',
    title: 'Emergência',
    description: 'Atendimento de urgência 24 horas'
  },
  {
    id: 4,
    icon: 'fas fa-pills',
    title: 'Farmácia',
    description: 'Medicamentos com preços acessíveis'
  },
  {
    id: 5,
    icon: 'fas fa-bed',
    title: 'Internação',
    description: 'Quartos confortáveis e monitoramento 24h'
  },
  {
    id: 6,
    icon: 'fas fa-user-nurse',
    title: 'Enfermagem',
    description: 'Cuidados especializados e humanizados'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. João Silva',
    role: 'Cardiologista',
    specialty: 'Cardiologia',
    description: 'Especialista em cardiologia com mais de 15 anos de experiência.'
  },
  {
    id: 2,
    name: 'Dra. Maria Santos',
    role: 'Pediatra',
    specialty: 'Pediatria',
    description: 'Pediatra especializada em cuidados infantis e adolescentes.'
  },
  {
    id: 3,
    name: 'Dr. Carlos Oliveira',
    role: 'Ortopedista',
    specialty: 'Ortopedia',
    description: 'Especialista em cirurgias ortopédicas e traumatologia.'
  },
  {
    id: 4,
    name: 'Dra. Ana Costa',
    role: 'Neurologista',
    specialty: 'Neurologia',
    description: 'Neurologista com foco em doenças do sistema nervoso.'
  }
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'Como agendar uma consulta?',
    answer: 'Você pode agendar uma consulta através do nosso sistema online, ligando para nossa central de atendimento ou presencialmente na recepção.'
  },
  {
    id: 2,
    question: 'Quais são os horários de funcionamento?',
    answer: 'Nosso hospital funciona 24 horas por dia, 7 dias por semana. A recepção administrativa funciona de segunda a sexta das 7h às 19h.'
  },
  {
    id: 3,
    question: 'Aceitam convênios médicos?',
    answer: 'Sim, aceitamos os principais convênios médicos. Entre em contato conosco para verificar se seu convênio está credenciado.'
  },
  {
    id: 4,
    question: 'Como posso acessar meus exames?',
    answer: 'Os resultados dos exames ficam disponíveis em nosso portal do paciente ou podem ser retirados na recepção com apresentação de documento.'
  },
  {
    id: 5,
    question: 'Qual é o procedimento para emergências?',
    answer: 'Para emergências, você pode se dirigir diretamente ao nosso pronto-socorro ou ligar para nossa ambulância através do número de emergência.'
  }
];
