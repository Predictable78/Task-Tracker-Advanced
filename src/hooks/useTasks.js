import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

export const useTasks = () => {
  const { user } = useAuth()
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (user) {
      const savedTasks = localStorage.getItem(`tasks_${user.id}`)
      setTasks(savedTasks ? JSON.parse(savedTasks) : [])
    } else {
      setTasks([])
    }
  }, [user])

  useEffect(() => {
    if (user && tasks.length >= 0) {
      localStorage.setItem(`tasks_${user.id}`, JSON.stringify(tasks))
    }
  }, [tasks, user])

  const addTask = (taskText) => {
    if (taskText.trim() === '') return
    
    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
      completed: false,
      userId: user?.id,
      createdAt: new Date().toISOString()
    }
    
    setTasks(prevTasks => [...prevTasks, newTask])
  }

  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
  }

  const toggleTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const editTask = (taskId, newText) => {
    if (newText.trim() === '') return
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, text: newText.trim() }
          : task
      )
    )
  }

  const clearCompletedTasks = () => {
    setTasks(prevTasks => prevTasks.filter(task => !task.completed))
  }

  const getTaskStats = () => {
    const total = tasks.length
    const completed = tasks.filter(task => task.completed).length
    const pending = total - completed
    return { total, completed, pending }
  }

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    editTask,
    clearCompletedTasks,
    getTaskStats
  }
}
