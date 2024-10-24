import { NavLink } from "react-router-dom"
import './Navbar.scss';
import { useAuth } from "../store/auth";

export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <>
            <header>
                <div id="box-navbar">
                    <div id="logo-box">
                        <NavLink id="logo" to="/">Mithun</NavLink>
                    </div>
                    <ul className="nav-links">
                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/achievement" >Achievement</NavLink></li>
                        <li><NavLink to="/about" >About</NavLink></li>
                        <li><NavLink to="/contact" >Contact</NavLink></li>

                    </ul>
                    <div id="login-reg-box">
                        <ul>

                            {isLoggedIn ?(

                                <li><NavLink to="/logout">Logout</NavLink></li>

                            ):( <>

                                    <li><NavLink to="/login">Login</NavLink></li>
                                    <li className="register-li"><NavLink className="register" to="/register">Get Started</NavLink></li>

                                </>

                            )}
                        </ul>
                    </div>
                    <button className="mobile-menu-btn" >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
        </>
    )
}
