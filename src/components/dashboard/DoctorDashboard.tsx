import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { User, Appointment, MedicalRecord } from '../../types'
import { useNotification } from '../../contexts/NotificationContext'

const recordSchema = z.object({
  patientId: z.number().min(1, 'Selecione um paciente'),
  diagnosis: z.string().min(1, 'Diagnóstico é obrigatório'),
  treatment: z.string().min(1, 'Tratamento é obrigatório'),
  notes: z.string().optional()
})

interface DoctorDashboardProps {
  user: User
}

const DoctorDashboard: React.FC<DoctorDashboardProps> = ({ user }) => {
  const { showNotification } = useNotification()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [patients, setPatients] = useState<User[]>([])
  const [showRecordForm, setShowRecordForm] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(recordSchema)
  })

  // Mock data
  useEffect(() => {
    const mockAppointments: Appointment[] = [
      {
        id: 1,
        patientId: 2,
        doctorId: user.id,
        date: '2024-10-05',
        time: '14:00',
        specialty: 'Cardiologia',
        status: 'confirmed'
      },
      {
        id: 2,
        patientId: 2,
        doctorId: user.id,
        date: '2024-10-10',
        time: '10:00',
        specialty: 'Cardiologia',
        status: 'pending'
      }
    ]

    const mockPatients: User[] = [
      {
        id: 2,
        name: 'Maria Santos',
        email: 'maria@email.com',
        password: '123456',
        type: 'patient',
        cpf: '123.456.789-00',
        phone: '(11) 99999-9999'
      }
    ]

    setAppointments(mockAppointments)
    setPatients(mockPatients)
  }, [user.id])

  const todayAppointments = appointments.filter(apt => 
    apt.date === new Date().toISOString().split('T')[0]
  )

  const onSubmitRecord = (data: any) => {
    const newRecord: MedicalRecord = {
      id: Date.now(),
      patientId: data.patientId,
      doctorId: user.id,
      date: new Date().toISOString().split('T')[0],
      diagnosis: data.diagnosis,
      treatment: data.treatment,
      notes: data.notes
    }

    showNotification('Prontuário salvo com sucesso!', 'success')
    setShowRecordForm(false)
    reset()
  }

  const confirmAppointment = (appointmentId: number) => {
    setAppointments(appointments.map(apt => 
      apt.id === appointmentId ? { ...apt, status: 'confirmed' as const } : apt
    ))
    showNotification('Consulta confirmada!', 'success')
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
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{todayAppointments.length}</h3>
          <p className="text-gray-600">Consultas Hoje</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{appointments.length}</h3>
          <p className="text-gray-600">Total de Consultas</p>
        </div>

        <div 
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
          onClick={() => setShowRecordForm(true)}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
            <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Novo Prontuário</h3>
          <p className="text-gray-600">Registrar atendimento</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
            <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{patients.length}</h3>
          <p className="text-gray-600">Pacientes Atendidos</p>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Agenda de Consultas</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Horário</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Paciente</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Especialidade</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((appointment) => {
                const patient = patients.find(p => p.id === appointment.patientId)
                return (
                  <tr key={appointment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatDate(appointment.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {appointment.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {patient?.name || 'N/A'}
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
                        onClick={() => confirmAppointment(appointment.id)}
                        className="text-primary-600 hover:text-primary-900 btn btn-sm btn-primary"
                        disabled={appointment.status === 'confirmed'}
                      >
                        Confirmar
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Record Form Modal */}
      {showRecordForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-md w-full mx-4 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Novo Prontuário Médico</h3>
              <button
                onClick={() => setShowRecordForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmitRecord)} className="space-y-4">
              <div>
                <label className="form-label">Paciente</label>
                <select
                  {...register('patientId', { valueAsNumber: true })}
                  className={`form-select ${errors.patientId ? 'border-red-500' : ''}`}
                >
                  <option value="">Selecione o paciente...</option>
                  {patients.map(patient => (
                    <option key={patient.id} value={patient.id}>
                      {patient.name}
                    </option>
                  ))}
                </select>
                {errors.patientId && (
                  <p className="mt-1 text-sm text-red-600">{errors.patientId.message}</p>
                )}
              </div>

              <div>
                <label className="form-label">Diagnóstico</label>
                <input
                  {...register('diagnosis')}
                  type="text"
                  className={`form-input ${errors.diagnosis ? 'border-red-500' : ''}`}
                  placeholder="Digite o diagnóstico"
                />
                {errors.diagnosis && (
                  <p className="mt-1 text-sm text-red-600">{errors.diagnosis.message}</p>
                )}
              </div>

              <div>
                <label className="form-label">Tratamento</label>
                <textarea
                  {...register('treatment')}
                  rows={3}
                  className={`form-textarea ${errors.treatment ? 'border-red-500' : ''}`}
                  placeholder="Descreva o tratamento"
                />
                {errors.treatment && (
                  <p className="mt-1 text-sm text-red-600">{errors.treatment.message}</p>
                )}
              </div>

              <div>
                <label className="form-label">Observações</label>
                <textarea
                  {...register('notes')}
                  rows={3}
                  className="form-textarea"
                  placeholder="Observações adicionais (opcional)"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowRecordForm(false)}
                  className="btn btn-outline flex-1"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary flex-1">
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default DoctorDashboard
