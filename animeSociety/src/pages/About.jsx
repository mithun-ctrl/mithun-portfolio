import '../components/About.scss';
import introduction from '../images/introduction.png';
import education from '../images/education.png';
import skill from '../images/skill.png';
import hobby from '../images/hobby.png';


export const About = () => {
    const skills = [
        { name: 'MERN', percentage: 80 },
        { name: 'C++', percentage: 70 },
        { name: 'PYTHON', percentage: 75 }
    ];
    return (
        <section>
            <div className="container-introduction">
                <div className="introduction-image-box">
                    <img src={introduction} alt="introduction" data-aos="zoom-out-down" data-aos-duration="1000" />
                </div>

                <div className="introduction-text-box">

                    <div className="introduction-heading" data-aos="fade-down-left" data-aos-duration="900">
                        <h1>Introduction</h1>
                    </div>

                    <div className="introduction-para" data-aos="fade-up-left" data-aos-duration="900">
                        <p>
                            Hi, I'm Mithun Yadav, a passionate Full Stack Developer
                            with a focus on creating dynamic and responsive web applications.
                            I specialize in the MERN stack (MongoDB, Express.js, React.js, and
                            Node.js). I enjoy tackling complex problems and building efficient,
                            user-friendly solutions. I'm always eager to explore new technologies
                            and continuously enhance my development skills by working on innovative projects.
                        </p>
                    </div>
                </div>
            </div>

            {/* education */}

            <div className="container-introduction">
                <div className="education-text-box">
                    <div className="education-heading" data-aos="fade-down-left" data-aos-duration="900">
                        <h1>Education</h1>
                    </div>

                    <div className="education-para" data-aos="fade-up-left" data-aos-duration="900">
                        <p>
                            I completed my high school in 2019 from the CBSE board,
                            achieving 82.6% marks. Later, I completed my secondary
                            high schooling in 2021, specializing in PCM (Physics,
                            Chemistry, and Mathematics), with 70.6% marks, also
                            from the CBSE board.
                        </p>
                    </div>
                </div>
                <div className="education-image-box">
                    <img src={education} alt="education" data-aos="zoom-out-down" data-aos-duration="1000" />
                </div>
            </div>

            {/* skills */}

            <div className="container-skill">
                <div className="skill-image-box">
                    <img src={skill} alt="skill" data-aos="zoom-out-down" data-aos-duration="1000" />
                </div>

                <div className="skill-text-box">
                    <div className="skill-heading" data-aos="fade-down-left" data-aos-duration="900">
                        <h1>Skills</h1>
                    </div>

                    <div className="skill-para" data-aos="fade-up-left" data-aos-duration="900">
                        <div className="skills-container">
                            {skills.map((skill, index) => (
                                <div className="skill-box" key={index} >
                                    <div className="skill-title" data-aos = "zoom-in-down"  data-aos-delay="300" data-aos-duration="900" >{skill.name}</div>
                                    <div className="skill-circle" data-aos = "zoom-in-up"  data-aos-delay="300" data-aos-duration="900" >
                                        <svg>
                                            <circle cx="70" cy="70" r="70" />
                                            <circle 
                                                cx="70" 
                                                cy="70" 
                                                r="70" 
                                                style={{
                                                    strokeDashoffset: `calc(440 - (440 * ${skill.percentage}) /100)`
                                                }}
                                            />
                                        </svg>
                                        <div className="percent">
                                            <h2>{skill.percentage}<span>%</span></h2>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hobby */}

            <div className="container-hobby">
                <div className="hobby-text-box">

                    <div className="hobby-heading" data-aos="fade-down-left" data-aos-duration="900">
                        <h1>Hobby</h1>
                    </div>

                    <div className="hobby-para" data-aos="fade-up-left" data-aos-duration="900">
                        <p>
                            In my free time I enjoy playing role-play games and watching isekai anime.
                            Both let me explore imaginative worlds and exciting adventures,
                            offering a fun escape from reality and sparking my creativity and engage
                            with complex storylines.

                        </p>
                    </div>
                </div>
                <div className="hobby-image-box">
                    <img src={hobby} alt="hobby" data-aos="zoom-out-down" data-aos-duration="1000" />
                </div>
            </div>
        </section>
    )
}