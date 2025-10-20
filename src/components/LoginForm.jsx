import { useState } from 'react'
import PropTypes from 'prop-types'

function LoginForm({ onLogin, onSwitchToRegister, loading }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('') // Clear error when user types
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    const result = await onLogin(formData.email, formData.password)
    if (!result.success) {
      setError(result.error)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">Sign in to your account</p>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
              placeholder="Enter your password"
            />
          </div>

          <button 
            type="submit" 
            className="auth-btn primary"
            disabled={loading || !formData.email || !formData.password}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="auth-switch">
          <p>Don't have an account? 
            <button 
              type="button" 
              className="switch-btn"
              onClick={onSwitchToRegister}
              disabled={loading}
            >
              Sign up
            </button>
          </p>
        </div>

        <div className="demo-credentials">
          <p><strong>Demo Credentials:</strong></p>
          <p>Email: demo@example.com</p>
          <p>Password: password</p>
        </div>
      </div>
    </div>
  )
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onSwitchToRegister: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default LoginForm
