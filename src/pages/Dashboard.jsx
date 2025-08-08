import React from 'react'
import { NavLink, Outlet } from 'react-router'
import DashboardNavbar from '../components/shared/DashboardNavbar'

export default function Dashboard() {
    return (
        <>
            <DashboardNavbar />
            <div className='flex flex-row items-start justify-between'>
                <aside className='border h-screen w-[200px] pt-5' >
                    <ol className="flex flex-col gap-5  *:border-b-2 *:pb-5 *:pl-5 text-2xl">
                        <li>
                            <NavLink to={"/dashboard/chat"}>
                                Chat
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/login"}>
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/signup"}>
                                Sign Up
                            </NavLink>
                        </li>
                    </ol>
                </aside>
                <div className=' w-full '>
                    <div className='text-3xl flex flex-row justify-center  border-b'>
                        {/* Dashboard */}
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}
