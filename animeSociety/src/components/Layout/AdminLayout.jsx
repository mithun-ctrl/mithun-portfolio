import { NavLink, Outlet } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";


export const AdminLayout = () => {

    return (
        <>

            <header>

                <div className='layout-container'>

                    <nav className='layout-nav'>

                        <ul>
                            <li>
                            <FaUser className='faUser' />
                                <NavLink to="/admin/users">
                                Users
                                </NavLink>
                            </li>
                            <li>
                            <FaMessage className='faMessage' />
                                <NavLink to="/admin/contacts">
                                Contacts
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    )
}


