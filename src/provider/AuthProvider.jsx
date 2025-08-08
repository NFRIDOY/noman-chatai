import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router';

export const AuthContex = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState()
    // let navigate = useNavigate();

    // if(!user) {
    //     navigate('/login')
    // }

    return (
        <AuthContex.Provider value={{ user, loading, setUser, setLoading }}>{children}</AuthContex.Provider>
    )
}
