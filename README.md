# Task Tracker - Authenticated Todo App

A comprehensive task management application built with React, featuring user authentication, advanced state management, and modern React patterns.

## 🚀 Features

### Authentication & User Management
- **User Registration & Login** - Secure authentication with mock backend
- **Protected Routes** - Dashboard accessible only to authenticated users
- **User-specific Data** - Each user has their own task storage
- **Session Persistence** - Login state maintained across browser sessions

### Task Management
- **Add New Tasks** - Create tasks with validation
- **Mark Complete/Incomplete** - Toggle task completion status
- **Edit Tasks** - Inline editing with keyboard shortcuts
- **Delete Tasks** - Remove unwanted tasks
- **Clear Completed** - Bulk remove completed tasks
- **Task Statistics** - View total, pending, and completed task counts

### Advanced React Features
- **React Router** - Client-side routing and navigation
- **Context API** - Global state management for authentication
- **Custom Hooks** - Reusable logic for tasks and authentication
- **Error Boundaries** - Graceful error handling and recovery
- **PropTypes** - Runtime type checking for component props
- **Protected Routes** - Route-level authentication guards

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Context API** - State management
- **Custom Hooks** - Reusable logic
- **PropTypes** - Type checking
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with animations

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ErrorBoundary.jsx      # Error handling component
│   ├── LoginForm.jsx          # User login form
│   ├── ProtectedRoute.jsx     # Route protection wrapper
│   ├── RegisterForm.jsx       # User registration form
│   ├── TaskForm.jsx           # Task creation form
│   ├── TaskItem.jsx           # Individual task component
│   ├── TaskList.jsx           # Task list container
│   └── UserDashboard.jsx      # Main dashboard component
├── contexts/
│   └── AuthContext.jsx        # Authentication context
├── hooks/
│   └── useTasks.js            # Custom task management hook
├── App.jsx                    # Main application component
├── main.jsx                   # Application entry point
└── index.css                  # Global styles
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser and navigate to `http://localhost:5173`**

## 🔐 Demo Credentials

For testing purposes, you can use these demo credentials:

- **Email:** demo@example.com
- **Password:** password

Or create a new account using the registration form.

## 📚 Key React Concepts Demonstrated

### 1. React Router
- Client-side routing with `BrowserRouter`
- Protected routes using `Navigate` component
- Route-based component rendering

### 2. Context API & State Management
- Global authentication state
- Provider pattern for state sharing
- Custom context hooks for easy access

### 3. Custom Hooks
- `useAuth()` - Authentication logic
- `useTasks()` - Task management logic
- Separation of concerns and reusability

### 4. Error Boundaries
- Class-based error boundary component
- Graceful error handling and recovery
- Development vs production error display

### 5. PropTypes
- Runtime type checking for all components
- Better development experience
- Documentation through prop types

### 6. Advanced Hooks Usage
- `useState` for local component state
- `useEffect` for side effects and lifecycle management
- Custom hooks for complex logic extraction

## 🎨 UI/UX Features

- **Responsive Design** - Works on desktop and mobile
- **Modern UI** - Clean, professional interface
- **Loading States** - Visual feedback during operations
- **Error Handling** - User-friendly error messages
- **Animations** - Smooth transitions and hover effects
- **Accessibility** - Keyboard navigation and screen reader support

## 🔧 Development Features

- **Hot Reload** - Instant updates during development
- **Error Boundaries** - Catch and display errors gracefully
- **PropTypes Validation** - Catch prop type mismatches
- **Console Logging** - Detailed error information in development
- **Modular Architecture** - Easy to maintain and extend

## 📝 Usage Examples

### Adding a New Task
1. Log in to your account
2. Type your task in the input field
3. Click "Add Task" or press Enter

### Managing Tasks
- **Complete:** Click on the task text
- **Edit:** Click the "Edit" button, make changes, and save
- **Delete:** Click the "Delete" button
- **Clear Completed:** Use the "Clear Completed" button to remove all completed tasks

### Authentication
- **Login:** Use demo credentials or create a new account
- **Logout:** Click the "Logout" button in the header
- **Switch Forms:** Toggle between login and registration

## 🚀 Future Enhancements

- Real backend API integration
- User profile management
- Task categories and tags
- Due dates and reminders
- Task sharing and collaboration
- Dark mode theme
- Offline support with service workers

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to Netlify, Vercel, or any static hosting service.

## Deployment

This app is ready to be deployed to:
- **Netlify**: Drag and drop the `dist` folder to Netlify
- **Vercel**: Connect your GitHub repository to Vercel
- **Any static hosting service**: Upload the contents of the `dist` folder