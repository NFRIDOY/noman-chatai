import { NavLink } from "react-router";
import logo from './../../assets/logo.png'
import { useSelector } from "react-redux";

export default function DashboardNavbar() {
    const access = useSelector((state) => state?.auth?.value) // Synchronous selector
    console.log("access:: ", access)
    return (
        <div className="flex flex-row items-center justify-between py-4 px-2 bg-gray-100 ">
            <div>
                <NavLink to={"/"} className='text-2xl'>
                    {/* Gameplan */}
                    <span className="flex flex-row items-center justify-start space-x-0.5">
                                            <img src={logo} alt="" srcSet="" className="size-10"/> 
                                            <span>
                                                gameplan
                                            </span>
                                        </span>
                </NavLink>
            </div>
            <ol className="flex flex-row gap-5">
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
        </div>
    )
}
