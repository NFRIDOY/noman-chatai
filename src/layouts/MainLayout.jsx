import React from 'react'
import Navbar from '../components/shared/Navbar'
import { Outlet } from 'react-router'

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            MainLayout
            <Outlet />
        </div>
    )
}
