import { NavLink } from "react-router";
import logo from './../../assets/logo.png'

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between mx-10 my-10">
            <div>
                <NavLink to={"/"} className='text-4xl' >
                    {/* Gameplan */}
                    <span className="flex flex-row items-center justify-start space-x-0.5">
                        <img src={logo} alt="" srcset="" className="size-10"/> 
                        <span>
                            gameplan
                        </span>
                    </span>
                </NavLink>
            </div>
            <ol className="flex flex-row gap-5">
                <li>
                    <NavLink to={"/"}>
                        Home
                    </NavLink>
                </li>
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
        </div>
    )
}
