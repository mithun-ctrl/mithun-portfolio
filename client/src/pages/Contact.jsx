import '../components/Contact.scss';
import contactImage from '../images/contact.webp';
import { useState } from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-hot-toast';


const URL = "https://mithun-portfolio-production.up.railway.app/api/form/contact";

const emptyContactForm = {
    username: "",
    email: "",
    message: "",
};

export const Contact = () => {
    const [contact, setContact] = useState(emptyContactForm);
    const [userData, setUserData] = useState(true);

    
    const { user } = useAuth();

    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });
        setUserData(false);
    }

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name]: value
        });
    };

    const handleSubmission = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });

            if (response.ok) {
                toast.success("Message sent Successfully");
                setContact({
                    ...contact,
                    message: "",
                });
                const responseData = await response.json();
                // console.log(responseData);
                setShowSuccess(true);
            }

            // console.log(response);

        } catch (error) {
            console.log("contact: ", error);
        }
    }

    return (
        <section>
            <div className='heading-contact'>
                <span>Contact Us</span>
            </div>
            <div className="container-contact">
                <div className="box-contact-img">
                    <img src={contactImage} alt='contact' data-aos="fade-up" data-aos-duration="1200" />
                </div>
                <div className="box-contact-form">
                    <form method='POST' onSubmit={handleSubmission}>
                        <div className="username-contact" data-aos="fade-left" data-aos-delay="300">
                            <label>Username</label>
                            <input
                                type="text"
                                id='username-cont'
                                required                               
                                name='username'
                                value={contact.username}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="email-contact" data-aos="fade-left" data-aos-delay="600">
                            <label>Email</label>
                            <input
                                type="email"
                                id='email-cont'
                                required                                
                                name='email'
                                value={contact.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="message-contact" data-aos="fade-left" data-aos-delay="900">
                            <label>Message</label>
                            <textarea
                                name="message"
                                id="message-cont"
                                cols={50}
                                rows={7}
                                placeholder='Message Here....'
                                required                                
                                value={contact.message}
                                onChange={handleInput}
                            />
                        </div>
                        <div className='btn-contact'>
                            <button 
                            type='submit'
                            >Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='location'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7200.574572583879!2d81.8498533431761!3d25.52880570999563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ac9f6b766558f%3A0x208357882660d69f!2sShantipuram%2C%20Phaphamau%2C%20Uttar%20Pradesh%20211013!5e0!3m2!1sen!2sin!4v1727887931980!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </section>
    )
}
