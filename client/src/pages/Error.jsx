import '../components/Error.scss';
import { NavLink } from 'react-router-dom';
import error from '../images/error.webp';
import notFound from '../images/404.webp';


export const Error = () =>{
    return(
        <section>
            <div className="container-error">
                <div className="left-box-error">
                    <img src={error} alt='error' data-aos="fade-up" data-aos-duration="900"/>
                </div>
                <div className="right-box-error">
                    <div className='error-404'>
                        <img src={notFound} alt='not found' data-aos="fade-down" data-aos-duration="900"/>
                        <h6 data-aos="fade-left" data-aos-duration="900">Oops! You seem to be lost</h6>
                        <p data-aos="fade-left" data-aos-duration="900">It looks like you've stumbled upon a page that doesn't exist. 
                                Don't worry, we're all lost sometimes!</p>
                        <ul>
                            <li data-aos="fade-up" data-aos-duration="900">
                            <NavLink to="/" >Return Home</NavLink >
                            </li>
                            <li data-aos="fade-up" data-aos-duration="900">
                            <NavLink to="/contact">Report Issue</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
