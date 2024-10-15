import { useAuth } from "../store/auth";
import '../components/Achievement.scss';

export const Achievement = () => {
    const { achievements } = useAuth();

    return (
        <section>
            <div className="main-container">
                {achievements.map((curElem, index) => {
                    const { achievement, description, provider, project, course, duration, certificateImage } = curElem;

                    // Use local file path to display the certificate
                    const certificateImagePath = `/certificates/${certificateImage}`;

                    return (
                        <div className="container-achievement" key={index}>
                            <div className="card">
                                <div className="img-achievement" >
                                    <img data-aos="fade-down-right" data-aos-duration="1200" src={certificateImagePath} alt={`Certificate for ${achievement}`} />
                                </div>
                                <div data-aos="fade-up-left" data-aos-duration="1200" className="details-box">
                                    <h1>{achievement}</h1>
                                    {/* <div className="course">
                                        <p><span>Course: </span>{course}</p>
                                    </div> */}
                                    <div className="provider">
                                        <p><span>From: </span>{provider}</p>
                                    </div>
                                    {/* <div className="duration">
                                        <p><span>Duration: </span>{duration}</p>
                                    </div>
                                    <div className="project">
                                        <p><span>Project: </span>{project}</p>
                                    </div> */}
                                    <div className="description">
                                        <p><span>About: </span>{description}</p>
                                    </div>
                                    <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" className="download-certificate">
                                        <a href={certificateImagePath} download={certificateImage}>
                                            Download Certificate
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
