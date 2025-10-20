import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import ErrorBoundary from './components/ErrorBoundary'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import UserDashboard from './components/UserDashboard'

function AuthPage() {
  const { login, register, loading, user } = useAuth()
  const [authMode, setAuthMode] = useState('login')
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/dashboard', { replace: true })
    }
  }, [user, navigate])

  if (authMode === 'login') {
    return (
      <LoginForm 
        onLogin={login}
        onSwitchToRegister={() => setAuthMode('register')}
        loading={loading}
      />
    )
  }

  return (
    <RegisterForm 
      onRegister={register}
      onSwitchToLogin={() => setAuthMode('login')}
      loading={loading}
    />
  )
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <div className="app">
            <Routes>
              <Route path="/login" element={<AuthPage />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <UserDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
