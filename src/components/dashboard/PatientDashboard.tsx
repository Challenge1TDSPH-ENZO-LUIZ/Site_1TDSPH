import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { User, Appointment, MedicalRecord } from '../../types'
import { useNotification } from '../../contexts/NotificationContext'

const appointmentSchema = z.object({
  doctorId: z.number().min(1, 'Selecione um médico'),
  date: z.string().min(1, 'Selecione uma data'),
  time: z.string().min(1, 'Selecione um horário')
})

interface PatientDashboardProps {
  user: User
}

const PatientDashboard: React.FC<PatientDashboardProps> = ({ user }) => {
  const { showNotification } = useNotification()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([])
  const [doctors, setDoctors] = useState<User[]>([])
  const [showAppointmentForm, setShowAppointmentForm] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(appointmentSchema)
  })

  // Mock data
  useEffect(() => {
    const mockAppointments: Appointment[] = [
      {
        id: 1,
        patientId: user.id,
        doctorId: 1,
        date: '2024-10-05',
        time: '14:00',
        specialty: 'Cardiologia',
        status: 'confirmed'
      },
      {
        id: 2,
        patientId: user.id,
        doctorId: 1,
        date: '2024-10-10',
        time: '10:00',
        specialty: 'Cardiologia',
        status: 'pending'
      }
    ]

    const mockMedicalRecords: MedicalRecord[] = [
      {
        id: 1,
        patientId: user.id,
        doctorId: 1,
        date: '2024-09-15',
        diagnosis: 'Hipertensão arterial',
        treatment: 'Medicação prescrita',
        notes: 'Retorno em 30 dias'
      }
    ]

    const mockDoctors: User[] = [
      {
        
      }
    ]

    setAppointments(mockAppointments)
    setMedicalRecords(mockMedicalRecords)
    setDoctors(mockDoctors)
  }, [user.id])

  const onSubmitAppointment = (data: any) => {
    const doctor = doctors.find(d => d.id === data.doctorId)
    const newAppointment: Appointment = {
      id: appointments.length + 1,
      patientId: user.id,
      doctorId: data.doctorId,
      date: data.date,
      time: data.time,
      specialty: doctor?.specialty || 'Geral',
      status: 'pending'
    }

    setAppointments([...appointments, newAppointment])
    showNotification('Consulta agendada com sucesso!', 'success')
    setShowAppointmentForm(false)
    reset()
  }

  const cancelAppointment = (appointmentId: number) => {
    if (window.confirm('Deseja realmente cancelar esta consulta?')) {
      setAppointments(appointments.map(apt => 
        apt.id === appointmentId ? { ...apt, status: 'cancelled' as const } : apt
      ))
      showNotification('Consulta cancelada com sucesso!', 'success')
    }
  }

  const getStatusBadge = (status: string) => {
    const badges = {
      'pending': 'badge-warning',
      'confirmed': 'badge-success',
      'cancelled': 'badge-danger',
      'completed': 'badge-info'
    }
    return badges[status as keyof typeof badges] || 'badge-info'
  }

  const getStatusText = (status: string) => {
    const texts = {
      'pending': 'Pendente',
      'confirmed': 'Confirmada',
      'cancelled': 'Cancelada',
      'completed': 'Concluída'
    }
    return texts[status as keyof typeof texts] || status
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR')
  }

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
          onClick={() => setShowAppointmentForm(true)}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
            <svg className="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Nova Consulta</h3>
          <p className="text-gray-600">Agendar nova consulta</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{appointments.length}</h3>
          <p className="text-gray-600">Consultas Agendadas</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{medicalRecords.length}</h3>
          <p className="text-gray-600">Prontuários</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
            <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Perfil</h3>
          <p className="text-gray-600">Meus dados pessoais</p>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Minhas Consultas</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Horário</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Médico</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Especialidade</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((appointment) => {
                const doctor = doctors.find(d => d.id === appointment.doctorId)
                return (
                  <tr key={appointment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatDate(appointment.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {appointment.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {doctor?.name || 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {appointment.specialty}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`badge ${getStatusBadge(appointment.status)}`}>
                        {getStatusText(appointment.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => cancelAppointment(appointment.id)}
                        className="text-red-600 hover:text-red-900 btn btn-sm"
                        disabled={appointment.status === 'cancelled'}
                      >
                        Cancelar
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Appointment Form Modal */}
      {showAppointmentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-md w-full mx-4 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Agendar Nova Consulta</h3>
              <button
                onClick={() => setShowAppointmentForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmitAppointment)} className="space-y-4">
              <div>
                <label className="form-label">Médico</label>
                <select
                  {...register('doctorId', { valueAsNumber: true })}
                  className={`form-select ${errors.doctorId ? 'border-red-500' : ''}`}
                >
                  <option value="">Selecione o médico...</option>
                  {doctors.map(doctor => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name} - {doctor.specialty}
                    </option>
                  ))}
                </select>
                {errors.doctorId && (
                  <p className="mt-1 text-sm text-red-600">{errors.doctorId.message}</p>
                )}
              </div>

              <div>
                <label className="form-label">Data</label>
                <input
                  {...register('date')}
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  className={`form-input ${errors.date ? 'border-red-500' : ''}`}
                />
                {errors.date && (
                  <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                )}
              </div>

              <div>
                <label className="form-label">Horário</label>
                <select
                  {...register('time')}
                  className={`form-select ${errors.time ? 'border-red-500' : ''}`}
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
                {errors.time && (
                  <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                )}
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAppointmentForm(false)}
                  className="btn btn-outline flex-1"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary flex-1">
                  Agendar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default PatientDashboard
