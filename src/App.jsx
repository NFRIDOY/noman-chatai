import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner/Banner'
import { AuthContex } from './provider/AuthProvider'
import { useNavigate } from 'react-router'

function App() {
  const { user, setUser } = useContext(AuthContex)
  let navigate = useNavigate();

  useEffect(() => {


    // if (res?.data?.user) {
    //           navigate('/dashboard/chat')
    //       }
    navigate('/login')
    if (!user) {
      navigate('/login')
    }
  }, [])

  return (
    <>
      <Banner />
    </>
  )
}

export default App
