import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    setLoading(true)
    try {
      // Mock API call - simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Check for demo user first
      if (email === 'demo@example.com' && password === 'password') {
        const userData = {
          id: 1,
          email: 'demo@example.com',
          name: 'Demo User',
          avatar: '👤'
        }
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
        return { success: true }
      }

      // Check for registered users
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]')
      const foundUser = registeredUsers.find(user =>
        user.email === email && user.password === password
      )

      if (foundUser) {
        const userData = {
          id: foundUser.id,
          email: foundUser.email,
          name: foundUser.name,
          avatar: '👤'
        }
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
        return { success: true }
      } else {
        return { success: false, error: 'Invalid email or password' }
      }
    } catch (error) {
      return { success: false, error: 'Login failed. Please try again.' }
    } finally {
      setLoading(false)
    }
  }

  const register = async (name, email, password) => {
    setLoading(true)
    try {
      // Mock API call - simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      if (!email || !password || !name) {
        return { success: false, error: 'Please fill in all fields' }
      }

      // Check if user already exists
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]')
      const existingUser = registeredUsers.find(user => user.email === email)

      if (existingUser) {
        return { success: false, error: 'User with this email already exists' }
      }

      // Create new user
      const newUser = {
        id: Date.now(),
        email,
        name,
        password, // In real app, this would be hashed
        avatar: '👤'
      }

      // Save to registered users list
      registeredUsers.push(newUser)
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))

      // Log the user in
      const userData = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        avatar: '👤'
      }
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return { success: true }
    } catch (error) {
      return { success: false, error: 'Registration failed. Please try again.' }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    const currentUser = user
    setUser(null)
    localStorage.removeItem('user')
    // Clear user-specific tasks on logout
    if (currentUser) {
      localStorage.removeItem(`tasks_${currentUser.id}`)
    }
  }

  const value = {
    user,
    login,
    register,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
