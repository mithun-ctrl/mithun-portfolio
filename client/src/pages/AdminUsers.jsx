import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";
import { toast } from 'react-hot-toast';
// import AdminLayout from "../components/Layout/AdminLayout";

const ADMIN_USERS_URL = "http://localhost:5000/api/admin/users";

export const AdminUsers = () => {
    const { authorizationToken } = useAuth();

    const [users, setUsers] = useState([]);

    const getAllUsersData = async () => {
        try {
            const response = await fetch(ADMIN_USERS_URL, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            const responseData = await response.json();
            // console.log(`Users data ${responseData}`);
            setUsers(responseData);
        } catch (error) {
            console.log("Error fetching users:", error);
        }
    };

    const deleteUser = async (id) =>{
        const DELETE_USERS_URL = `http://localhost:5000/api/admin/users/delete/${id}`;
       
        const response = await fetch(DELETE_USERS_URL, {
            method: "DELETE",
            headers: {
                Authorization: authorizationToken,
            },
            
        });

        if(response.ok){
            toast.success("User deleted successfully")
            getAllUsersData();
        }

        
        const responseData = await response.json();
        // console.log(`Users data after delete ${responseData}`);
        
    };

    useEffect(() => {
        getAllUsersData();
    }, []);

    return (
        <>
            <div className="admin-user-container">
                <div className="admin-user-heading">
                    <span>
                        Register User Data
                    </span>
                </div>

                <div className="admin-user-table">

                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((curUsers, index) => {
                                return (
                                   <tr key={index}>
                                       <td> {curUsers.username} </td>
                                       <td> {curUsers.email} </td>
                                       <td>
                                        <button 
                                        className=" btn-table btn-delete-user"
                                        onClick={()=> deleteUser(curUsers._id)}>
                                            Delete
                                        </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        </>


    )
};