import { Link, NavLink } from "react-router-dom"
import Logo from "../../logo.svg"
const NavBar = props => {
    return (
        <nav className="d-flex flex-row justify-content-start align-items-center w-100 position-fixed overflow-hidden z-1 shadow p-1">
            <Link to={"/"} className="logo p-1">
                <img src={Logo} alt="" className="" />
            </Link>
            <ul className="d-flex flex-row align-self-end align-items-end">
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/login"}>login</NavLink>

                </li>
            </ul>
        </nav>
    )
}

export default NavBar