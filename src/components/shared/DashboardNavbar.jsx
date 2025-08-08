import { NavLink } from "react-router";

export default function DashboardNavbar() {
    return (
        <div className="flex flex-row items-center justify-between mx-2 my-2">
            <div>
                <NavLink to={"/"}>
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
