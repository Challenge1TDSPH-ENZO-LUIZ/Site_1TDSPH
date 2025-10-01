import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Appointment, MedicalRecord } from '../types';

const Dashboard: React.FC = () => {
  const { currentUser, users, appointments, medicalRecords, addAppointment, updateAppointment, addMedicalRecord } = useApp();
  const navigate = useNavigate();
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [showRecordForm, setShowRecordForm] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return null;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      'pending': 'bg-yellow-100 text-yellow-800',
      'confirmed': 'bg-green-100 text-green-800',
      'cancelled': 'bg-red-100 text-red-800',
      'completed': 'bg-blue-100 text-blue-800'
    };
    return badges[status as keyof typeof badges] || 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (status: string) => {
    const texts = {
      'pending': 'Pendente',
      'confirmed': 'Confirmada',
      'cancelled': 'Cancelada',
      'completed': 'Concluída'
    };
    return texts[status as keyof typeof texts] || status;
  };

  const handleLogout = () => {
    navigate('/');
  };

  const PatientDashboard = () => {
    const userAppointments = appointments.filter(a => a.patientId === currentUser.id);
    const userRecords = medicalRecords.filter(r => r.patientId === currentUser.id);

    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => setShowAppointmentForm(true)}
          >
            <i className="fas fa-calendar-plus text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Nova Consulta</h3>
            <p className="text-gray-600">Agendar nova consulta</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-calendar-check text-4xl text-green-600 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{userAppointments.length}</h3>
            <p className="text-gray-600">Consultas Agendadas</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-file-medical text-4xl text-purple-600 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{userRecords.length}</h3>
            <p className="text-gray-600">Prontuários</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-user text-4xl text-orange-600 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfil</h3>
            <p className="text-gray-600">Meus dados pessoais</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b">
            <h3 className="text-xl font-semibold text-gray-900">Minhas Consultas</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Data</th>
                  <th className="px-6 py-3 text-left">Horário</th>
                  <th className="px-6 py-3 text-left">Médico</th>
                  <th className="px-6 py-3 text-left">Especialidade</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-left">Ações</th>
                </tr>
              </thead>
              <tbody>
                {userAppointments.map(appointment => {
                  const doctor = users.find(u => u.id === appointment.doctorId);
                  return (
                    <tr key={appointment.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{formatDate(appointment.date)}</td>
                      <td className="px-6 py-4">{appointment.time}</td>
                      <td className="px-6 py-4">{doctor?.name || 'N/A'}</td>
                      <td className="px-6 py-4">{appointment.specialty}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(appointment.status)}`}>
                          {getStatusText(appointment.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => updateAppointment(appointment.id, { status: 'cancelled' })}
                          className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors duration-200"
                        >
                          Cancelar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {showAppointmentForm && (
          <AppointmentForm onClose={() => setShowAppointmentForm(false)} />
        )}
      </div>
    );
  };

  const DoctorDashboard = () => {
    const doctorAppointments = appointments.filter(a => a.doctorId === currentUser.id);
    const todayAppointments = doctorAppointments.filter(a => a.date === new Date().toISOString().split('T')[0]);

    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-calendar-day text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{todayAppointments.length}</h3>
            <p className="text-gray-600">Consultas Hoje</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-calendar-week text-4xl text-green-600 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctorAppointments.length}</h3>
            <p className="text-gray-600">Total de Consultas</p>
          </div>
          <div 
            className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => setShowRecordForm(true)}
          >
            <i className="fas fa-file-medical-alt text-4xl text-purple-600 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Novo Prontuário</h3>
            <p className="text-gray-600">Registrar atendimento</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-users text-4xl text-orange-600 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {medicalRecords.filter(r => r.doctorId === currentUser.id).length}
            </h3>
            <p className="text-gray-600">Pacientes Atendidos</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b">
            <h3 className="text-xl font-semibold text-gray-900">Agenda de Consultas</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Data</th>
                  <th className="px-6 py-3 text-left">Horário</th>
                  <th className="px-6 py-3 text-left">Paciente</th>
                  <th className="px-6 py-3 text-left">Especialidade</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-left">Ações</th>
                </tr>
              </thead>
              <tbody>
                {doctorAppointments.map(appointment => {
                  const patient = users.find(u => u.id === appointment.patientId);
                  return (
                    <tr key={appointment.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{formatDate(appointment.date)}</td>
                      <td className="px-6 py-4">{appointment.time}</td>
                      <td className="px-6 py-4">{patient?.name || 'N/A'}</td>
                      <td className="px-6 py-4">{appointment.specialty}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(appointment.status)}`}>
                          {getStatusText(appointment.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => updateAppointment(appointment.id, { status: 'confirmed' })}
                          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors duration-200 mr-2"
                        >
                          Confirmar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {showRecordForm && (
          <RecordForm onClose={() => setShowRecordForm(false)} />
        )}
      </div>
    );
  };

  const AdminDashboard = () => {
    const totalPatients = users.filter(u => u.type === 'patient').length;
    const totalDoctors = users.filter(u => u.type === 'doctor').length;
    const totalAppointments = appointments.length;

    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-users text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{totalPatients}</h3>
            <p className="text-gray-600">Total de Pacientes</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-user-md text-4xl text-green-600 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{totalDoctors}</h3>
            <p className="text-gray-600">Total de Médicos</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-calendar-check text-4xl text-purple-600 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{totalAppointments}</h3>
            <p className="text-gray-600">Total de Consultas</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-file-medical text-4xl text-orange-600 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{medicalRecords.length}</h3>
            <p className="text-gray-600">Prontuários</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b">
            <h3 className="text-xl font-semibold text-gray-900">Todas as Consultas</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Data</th>
                  <th className="px-6 py-3 text-left">Horário</th>
                  <th className="px-6 py-3 text-left">Paciente</th>
                  <th className="px-6 py-3 text-left">Médico</th>
                  <th className="px-6 py-3 text-left">Especialidade</th>
                  <th className="px-6 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map(appointment => {
                  const patient = users.find(u => u.id === appointment.patientId);
                  const doctor = users.find(u => u.id === appointment.doctorId);
                  return (
                    <tr key={appointment.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{formatDate(appointment.date)}</td>
                      <td className="px-6 py-4">{appointment.time}</td>
                      <td className="px-6 py-4">{patient?.name || 'N/A'}</td>
                      <td className="px-6 py-4">{doctor?.name || 'N/A'}</td>
                      <td className="px-6 py-4">{appointment.specialty}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(appointment.status)}`}>
                          {getStatusText(appointment.status)}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const AppointmentForm = ({ onClose }: { onClose: () => void }) => {
    const [formData, setFormData] = useState({
      doctorId: '',
      date: '',
      time: ''
    });

    const doctors = users.filter(u => u.type === 'doctor');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const doctor = users.find(u => u.id === parseInt(formData.doctorId));
      
      addAppointment({
        patientId: currentUser.id,
        doctorId: parseInt(formData.doctorId),
        date: formData.date,
        time: formData.time,
        specialty: doctor?.specialty || 'Geral',
        status: 'pending'
      });
      
      onClose();
    };

    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Agendar Nova Consulta</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Médico</label>
            <select
              value={formData.doctorId}
              onChange={(e) => setFormData({...formData, doctorId: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Selecione o médico...</option>
              {doctors.map(doctor => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} - {doctor.specialty}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Data</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Horário</label>
            <select
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Selecione o horário...</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
            </select>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Agendar Consulta
            </button>
            <button
              type="button"
              onClick={onClose}
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    );
  };

  const RecordForm = ({ onClose }: { onClose: () => void }) => {
    const [formData, setFormData] = useState({
      patientId: '',
      diagnosis: '',
      treatment: '',
      notes: ''
    });

    const patients = users.filter(u => u.type === 'patient');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      addMedicalRecord({
        patientId: parseInt(formData.patientId),
        doctorId: currentUser.id,
        date: new Date().toISOString().split('T')[0],
        diagnosis: formData.diagnosis,
        treatment: formData.treatment,
        notes: formData.notes
      });
      
      onClose();
    };

    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Novo Prontuário Médico</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Paciente</label>
            <select
              value={formData.patientId}
              onChange={(e) => setFormData({...formData, patientId: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Selecione o paciente...</option>
              {patients.map(patient => (
                <option key={patient.id} value={patient.id}>
                  {patient.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Diagnóstico</label>
            <input
              type="text"
              value={formData.diagnosis}
              onChange={(e) => setFormData({...formData, diagnosis: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tratamento</label>
            <textarea
              value={formData.treatment}
              onChange={(e) => setFormData({...formData, treatment: e.target.value})}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Observações</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Salvar Prontuário
            </button>
            <button
              type="button"
              onClick={onClose}
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Dashboard - {currentUser.name}
            </h1>
            <p className="text-gray-600 mt-2">
              Bem-vindo ao sistema de gestão hospitalar
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
          >
            <i className="fas fa-sign-out-alt mr-2"></i>
            Sair
          </button>
        </div>

        {currentUser.type === 'patient' && <PatientDashboard />}
        {currentUser.type === 'doctor' && <DoctorDashboard />}
        {currentUser.type === 'admin' && <AdminDashboard />}
      </div>
    </div>
  );
};

export default Dashboard;