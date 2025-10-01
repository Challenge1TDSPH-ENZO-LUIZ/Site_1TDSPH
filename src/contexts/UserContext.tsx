import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User } from '../types'

interface UserContextType {
  currentUser: User | null
  login: (email: string, password: string, userType: string) => boolean
  logout: () => void
  isAuthenticated: boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  // Mock users data
  const users: User[] = [
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

  const login = (email: string, password: string, userType: string): boolean => {
    const user = users.find(u => 
      u.email === email && 
      u.password === password && 
      u.type === userType
    )
    
    if (user) {
      setCurrentUser(user)
      localStorage.setItem('currentUser', JSON.stringify(user))
      return true
    }
    return false
  }

  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem('currentUser')
  }

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser')
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser))
    }
  }, [])

  const value: UserContextType = {
    currentUser,
    login,
    logout,
    isAuthenticated: !!currentUser
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
