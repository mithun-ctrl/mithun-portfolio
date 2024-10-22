import "../components/Login.scss";
import yuji from '../images/yuji.webp';
import google from '../images/google.webp';
import x from '../images/x.webp';
import facebook from '../images/facebook.webp';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-hot-toast';


const URL = "https://mithun-portfolio-production.up.railway.app/api/auth/login";

export const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value
        })

    }

    const handleSubmission = async (e) => {
        e.preventDefault();
        // console.log(user);

        try {

            const response = await fetch(URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(user),

            });

            const responseData = await response.json();

            if (response.ok) {
                // alert("login successfull");

                toast.success(`Login Successfull`)

                storeTokenInLS(responseData.token);

                setUser({ email: "", password: "", });
                navigate("/");
            } else {
                toast.error(responseData.extraError ? responseData.extraError :
                    responseData.message,{
                        progressStyle: { background: '#000000' },
                    }
                );
            }

        } catch (error) {
            console.log("login: ", error);
        }
    }
    return (
        <section>
            <div className="container-login">
                <div className="box-left">
                    <img className="img-left" src={yuji} alt="Yuji"></img>
                    <h1>Access <span className="my">My</span> <span className="portfolio">Portfolio</span></h1>
                </div>

                <div className="box-right">
                    <h1>Login</h1>
                    <div className="form-login">
                        <form action="" method="POST" onSubmit={handleSubmission}>
                            <div className="email">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required                                    
                                    name="email"
                                    value={user.email}
                                    onChange={handleInput}
                                ></input>
                            </div>
                            <div className="password">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    name="password"                                    
                                    value={user.password}
                                    onChange={handleInput}
                                ></input>
                            </div>
                            <div className="forget-password">
                                <a href="#">reset password?</a>
                            </div>
                            <div className="btn-login">
                                <button
                                    className="btn"
                                >Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="social-login">
                        <p><span>━━━━━━━━━</span> Other login <span>━━━━━━━━━━</span></p> {/* I'm little bit lazy at my work!  */}
                        <ul>
                            <li>
                                <NavLink to="#">
                                    <img src={google} alt="google"></img>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#">
                                    <img src={x} alt="x"></img>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#">
                                    <img src={facebook} alt="facebook"></img>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
