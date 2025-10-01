import { useState, useEffect } from 'react'
import { User, Appointment, MedicalRecord } from '../../types'

interface AdminDashboardProps {
  user: User
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([])

  // Mock data
  useEffect(() => {
    const mockUsers: User[] = [
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
    ]

    const mockAppointments: Appointment[] = [
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
        
      }
    ]

    const mockMedicalRecords: MedicalRecord[] = [
      {
        id: 1,
        patientId: 2,
        doctorId: 1,
        date: '2024-09-15',
        diagnosis: 'Hipertensão arterial',
        treatment: 'Medicação prescrita',
        notes: 'Retorno em 30 dias'
      }
    ]

    setUsers(mockUsers)
    setAppointments(mockAppointments)
    setMedicalRecords(mockMedicalRecords)
  }, [])

  const totalPatients = users.filter(u => u.type === 'patient').length
  const totalDoctors = users.filter(u => u.type === 'doctor').length
  const totalAppointments = appointments.length

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
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{totalPatients}</h3>
          <p className="text-gray-600">Total de Pacientes</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{totalDoctors}</h3>
          <p className="text-gray-600">Total de Médicos</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
            <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{totalAppointments}</h3>
          <p className="text-gray-600">Total de Consultas</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
            <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{medicalRecords.length}</h3>
          <p className="text-gray-600">Prontuários</p>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Todas as Consultas</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Horário</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Paciente</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Médico</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Especialidade</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((appointment) => {
                const patient = users.find(u => u.id === appointment.patientId)
                const doctor = users.find(u => u.id === appointment.doctorId)
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
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Usuários do Sistema</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nome</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Tipo</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Especialidade</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Telefone</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`badge ${
                      user.type === 'admin' ? 'badge-danger' :
                      user.type === 'doctor' ? 'badge-info' : 'badge-success'
                    }`}>
                      {user.type === 'admin' ? 'Administrador' :
                       user.type === 'doctor' ? 'Médico' : 'Paciente'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.specialty || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.phone || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
