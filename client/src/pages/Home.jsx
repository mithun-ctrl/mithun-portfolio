import '../components/Home.scss';
import character from '../images/character.webp';
import { NavLink } from 'react-router-dom';


export const Home = () => {
    return (
        <section>
            <div className="container-home">
                <div className="hero">
                    <div className="hero-content">
                        <h1 className="hero-title" data-aos="fade-right" data-aos-duration="1200">MITHUN YADAV</h1>
                        <p className="hero-text" data-aos="zoom-out" data-aos-duration="1200">
                        Hi, I'm a Full Stack Developer with a passion for 
                        building dynamic and responsive web applications. 
                        </p>
                        <NavLink to="/about" className="cta-button" data-aos="fade-up" data-aos-duration="900">
                            KNOW MORE
                        </NavLink>
                    </div>
                    <div className="hero-image-container" data-aos="fade-down" data-aos-duration="1200" >
                        <img src={character} alt="Beautiful woman with crown" />
                    </div>
                </div>
                
                {/* Decorative elements */}
                <div className="decorative-dots dot-1"></div>
                <div className="decorative-dots dot-2"></div>
                <div className="decorative-circle"></div>
            </div>
        </section>
    );
};
