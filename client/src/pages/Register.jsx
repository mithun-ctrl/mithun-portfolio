import '../components/Register.scss';
import zumpakto from '../images/zumpakto.webp';
import google from '../images/google.webp';
import x from '../images/x.webp';
import facebook from '../images/facebook.webp';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-hot-toast';
import AOS from 'aos';
AOS.init();

const URL = "https://mithun-portfolio-production.up.railway.app/api/auth/register";

export const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    //handling input values

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleSubmission = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(user),
            });
            // console.log(response);

            const responseData = await response.json();
            console.log(responseData);
            if (response.ok) {
                toast.success("Registration Successfull!")
                storeTokenInLS(responseData.token);

                setUser({ username: "", email: "", password: "" });
                navigate("/");
            } else {
                toast.error(responseData.extraError ? responseData.extraError :
                    responseData.message
                );
            }

        } catch (error) {
            console.log("regsiter: ", error);
        }
    }


    return (
        <section>
            <div className="container-register" data-aos="zoom-in-down" data-aos-duration="1200">
                <div className="box-reg-left">
                    <h1>Sign-Up</h1>
                    <div className='reg-form'>
                        <form method='POST' onSubmit={handleSubmission}>
                            <div className="username">
                                <input
                                    name="username"
                                    type='text'
                                    id='usernmae'
                                    placeholder='Username'
                                    required                                    
                                    values={user.username}
                                    onChange={handleInput}
                                ></input>
                            </div>
                            <div className="reg-email">
                                <input
                                    name="email"
                                    type='email'
                                    placeholder='Email'
                                    required                                    
                                    id='email-reg'
                                    values={user.email}
                                    onChange={handleInput}
                                ></input>
                            </div>
                            <div className="reg-password">
                                <input
                                    name="password"
                                    type='password'
                                    placeholder='Password'
                                    id='password-reg'                                    
                                    required
                                    values={user.password}
                                    onChange={handleInput}
                                ></input>
                            </div>
                            <div className="reg-btn">
                                <button
                                    type='submit'
                                    className='rbtn'
                                >SignUp</button>
                            </div>
                        </form>
                    </div>
                    <div className="social-media-reg">
                        <div className='heading'>
                            <p> <span>━━━━━━━━━━━━ </span>Other Sign-Up <span>━━━━━━━━━━━━━</span></p>
                        </div>

                        <ul>
                            <li>
                                <NavLink to='#'>
                                    <img src={google} alt='google-login'></img>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>
                                    <img src={x} alt='google-login'></img>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>
                                    <img src={facebook} alt='google-login'></img>
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="box-reg-right">
                    <img src={zumpakto} alt="" />
                </div>
            </div>
        </section>
    )
}
