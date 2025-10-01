import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Notification {
  id: string
  message: string
  type: 'success' | 'error'
}

interface NotificationContextType {
  notifications: Notification[]
  showNotification: (message: string, type: 'success' | 'error') => void
  removeNotification: (id: string) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}

interface NotificationProviderProps {
  children: ReactNode
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const showNotification = (message: string, type: 'success' | 'error') => {
    const id = Math.random().toString(36).substr(2, 9)
    const notification: Notification = { id, message, type }
    
    setNotifications(prev => [...prev, notification])
    
    setTimeout(() => {
      removeNotification(id)
    }, 3000)
  }

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id))
  }

  const value: NotificationContextType = {
    notifications,
    showNotification,
    removeNotification
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <div className="fixed top-5 right-5 z-50 space-y-2">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={`notification ${
              notification.type === 'success' ? 'notification-success' : 'notification-error'
            }`}
          >
            {notification.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  )
}
