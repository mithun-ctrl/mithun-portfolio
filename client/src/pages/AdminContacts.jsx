import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";
import { toast } from 'react-hot-toast';

const ADMIN_CONTACTS_URL = "http://localhost:5000/api/admin/contacts";

export const AdminContacts = () => {
    const { authorizationToken } = useAuth();

    const [contacts, setContacts] = useState([]);

    const getAllContactsData = async () => {
        try {
            const response = await fetch(ADMIN_CONTACTS_URL, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            const responseData = await response.json();
            // console.log(`Users data ${responseData}`);
            setContacts(responseData);
        } catch (error) {
            console.log("Error fetching users:", error);
        }
    };

    const deleteContacts = async (id) =>{
        const DELETE_CONTACTS_URL = `http://localhost:5000/api/admin/contacts/delete/${id}`;
       
        const response = await fetch(DELETE_CONTACTS_URL, {
            method: "DELETE",
            headers: {
                Authorization: authorizationToken,
            },
            
        });

        if(response.ok){
            toast.success("Conatact deleted successfully")
            getAllContactsData();
        }

        
        const responseData = await response.json();
        // console.log(`Users data after delete ${responseData}`);
        
    };

    useEffect(() => {
        getAllContactsData();
    }, []);

    return (
        <>
            <div className="admin-user-container">
                <div className="admin-user-heading">
                    <span>
                        User Contacts Data
                    </span>
                </div>

                <div className="admin-user-table">

                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((curContacts, index) => {
                                return (
                                   <tr key={index}>
                                       <td> {curContacts.username} </td>
                                       <td> {curContacts.email} </td>
                                       <td>{curContacts.message}</td>
                                       <td>
                                        <button 
                                        className=" btn-table btn-delete-user"
                                        onClick={()=> deleteContacts(curContacts._id)}>
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