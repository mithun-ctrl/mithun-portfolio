import { NavLink } from "react-router-dom"
import { useState } from 'react';
import './Navbar.scss';
import { useAuth } from "../store/auth";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const { isLoggedIn } = useAuth();
    return (
        <>
            <header>
                <div id="box-navbar">
                    <div id="logo-box">
                        <NavLink id="logo" to="/">Mithun</NavLink>
                    </div>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
                        <li><NavLink to="/achievement" onClick={() => setIsMenuOpen(false)}>Achievement</NavLink></li>
                        <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
                        <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>

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
                    <button className="mobile-menu-btn" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
        </>
    )
}