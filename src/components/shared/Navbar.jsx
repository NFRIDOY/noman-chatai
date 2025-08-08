import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between mx-10 my-10">
            <div>
                <NavLink to={"/"} className='text-4xl' >
                    Gameplan
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
