import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Appointment, MedicalRecord } from '../types';
import { mockUsers, mockAppointments, mockMedicalRecords } from '../data/mockData';

interface AppContextType {
  users: User[];
  appointments: Appointment[];
  medicalRecords: MedicalRecord[];
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  addUser: (user: Omit<User, 'id'>) => void;
  addAppointment: (appointment: Omit<Appointment, 'id'>) => void;
  updateAppointment: (id: number, updates: Partial<Appointment>) => void;
  addMedicalRecord: (record: Omit<MedicalRecord, 'id'>) => void;
  saveData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('hospitalUsers');
    return saved ? JSON.parse(saved) : mockUsers;
  });

  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('hospitalAppointments');
    return saved ? JSON.parse(saved) : mockAppointments;
  });

  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>(() => {
    const saved = localStorage.getItem('hospitalRecords');
    return saved ? JSON.parse(saved) : mockMedicalRecords;
  });

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const addUser = (userData: Omit<User, 'id'>) => {
    const newUser: User = {
      ...userData,
      id: Math.max(...users.map(u => u.id), 0) + 1,
    };
    setUsers(prev => [...prev, newUser]);
  };

  const addAppointment = (appointmentData: Omit<Appointment, 'id'>) => {
    const newAppointment: Appointment = {
      ...appointmentData,
      id: Math.max(...appointments.map(a => a.id), 0) + 1,
    };
    setAppointments(prev => [...prev, newAppointment]);
  };

  const updateAppointment = (id: number, updates: Partial<Appointment>) => {
    setAppointments(prev =>
      prev.map(appointment =>
        appointment.id === id ? { ...appointment, ...updates } : appointment
      )
    );
  };

  const addMedicalRecord = (recordData: Omit<MedicalRecord, 'id'>) => {
    const newRecord: MedicalRecord = {
      ...recordData,
      id: Math.max(...medicalRecords.map(r => r.id), 0) + 1,
    };
    setMedicalRecords(prev => [...prev, newRecord]);
  };

  const saveData = () => {
    localStorage.setItem('hospitalUsers', JSON.stringify(users));
    localStorage.setItem('hospitalAppointments', JSON.stringify(appointments));
    localStorage.setItem('hospitalRecords', JSON.stringify(medicalRecords));
  };

  useEffect(() => {
    saveData();
  }, [users, appointments, medicalRecords]);

  const value: AppContextType = {
    users,
    appointments,
    medicalRecords,
    currentUser,
    setCurrentUser,
    addUser,
    addAppointment,
    updateAppointment,
    addMedicalRecord,
    saveData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
