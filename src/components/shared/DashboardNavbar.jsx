import { NavLink } from "react-router";

export default function DashboardNavbar() {
    return (
        <div className="flex flex-row items-center justify-between py-4 px-2 bg-gray-100 ">
            <div>
                <NavLink to={"/"} className='text-2xl'>
                    Gameplan
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
