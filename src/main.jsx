import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/Login.jsx'
import Reg from './pages/Reg.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import { AuthProvider } from './provider/AuthProvider.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Chat from './components/Chat/Chat.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Reg />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/chat" element={<Chat />} />
              {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Reg />} /> */}
            </Route>
          </Routes>
        </BrowserRouter >
      </AuthProvider>
    </PersistGate>
  </Provider>
  ,
)
