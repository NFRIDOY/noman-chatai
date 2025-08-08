import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/Login.jsx'
import Reg from './pages/Reg.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import { AuthProvider } from './provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Reg />} />
        </Route>
      </Routes>
    </BrowserRouter >
  </AuthProvider>
  ,
)
