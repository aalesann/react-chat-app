import React from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthProvider } from './context/AuthProvider'
import { SocketProvider } from './context/SocketProvider'

export const App = () => {
  return (
    <AuthProvider>
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </AuthProvider>
  )
}
