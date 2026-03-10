import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './LoginPage.tsx'
import MenuCustomerPage from './MenuCustomerPage.tsx'
import CustomerPackagePurchase from './CustomerPackagePurchasePage.tsx'

const App = () => {
  return (
    <Routes>
      {/* Redirect dari "/" ke "/login" */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/menucustomer" element={<MenuCustomerPage />} />
      <Route path="/customerpackagepurchase" element={<CustomerPackagePurchase />} />
    </Routes>
  )
}

export default App