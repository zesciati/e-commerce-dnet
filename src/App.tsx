import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './LoginPage.tsx'

const App = () => {
  return (
    <Routes>
      {/* Redirect dari "/" ke "/login" */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App