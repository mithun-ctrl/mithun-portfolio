import { NavLink, Outlet } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import users from './layout-images/users.png';
import contacts from './layout-images/contacts.png';
import admins from './layout-images/admin.png';



export const AdminLayout = () => {

    return (
        <>

            <div className="admin-container">

                <div className='admin-users'>
                    <figure>

                        <img src={users} alt="uses" />
                    </figure>
                    <div className="users-text">
                        <p>Registered Users Data</p>
                    </div>

                    <div className="admin-btn">
                        <NavLink to="/admin/users">
                            Users
                        </NavLink>
                    </div>

                </div>

                <div className='admin-contacts'>
                    <figure>

                        <img src={contacts} alt="uses" />
                    </figure>

                    <div className="contacts-text">
                        <p>Contatcs Users Data</p>
                    </div>

                    <div className="admin-btn">
                        <NavLink to="/admin/contacts">
                            Contacts
                        </NavLink>
                    </div>

                </div>

                <div className='admin-admins'>

                    <figure>

                        <img src={admins} alt="uses" />
                    </figure>
                    <div className="admins-text">
                        <p>Admins Users Data</p>
                    </div>

                    <div className="admin-btn">
                        <NavLink to="/admin/access">
                            Admins
                        </NavLink>
                    </div>

                </div>
            </div>
            <Outlet />
        </>
    )
}


