import "./about.css";

export default function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1 className="about-title">About Me</h1>
                <p className="about-subtitle">My background, skills, and experience</p>
            </div>

            <div className="about-grid">
                {/* Profile Overview */}
                <div className="about-profile">
                    <div className="card profile-card">
                        <div className="profile-avatar">
                            MS
                        </div>
                        <h2 className="profile-name">Mohamed Saad</h2>
                        <p className="profile-role">MERN Stack Developer</p>
                        <div className="profile-details">
                            <p className="profile-detail"><span>Location:</span> <strong>Egypt</strong></p>
                            <p className="profile-detail"><span>Experience:</span> <strong>3+ Years</strong></p>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="about-details">
                    {/* Biography */}
                    <div className="card about-bio">
                        <h3 className="section-title">Biography</h3>
                        <p className="section-text">
                            I am a passionate software developer with over 3 years of experience in building modern web applications. 
                            My career objective is to continuously improve my skills and contribute to impactful projects that provide great user experiences.
                        </p>
                    </div>

                    <div className="skills-grid">
                        {/* Technical Skills */}
                        <div className="card skills-card">
                            <h3 className="section-title">Technical Skills</h3>
                            <ul className="skills-list">
                                <li><span className="bullet bullet-primary"></span> React.js & Redux</li>
                                <li><span className="bullet bullet-primary"></span> Node.js & Express</li>
                                <li><span className="bullet bullet-primary"></span> MongoDB</li>
                                <li><span className="bullet bullet-primary"></span> Pure CSS</li>
                            </ul>
                        </div>

                        {/* Soft Skills */}
                        <div className="card skills-card">
                            <h3 className="section-title">Soft Skills</h3>
                            <ul className="skills-list">
                                <li><span className="bullet bullet-success"></span> Problem Solving</li>
                                <li><span className="bullet bullet-success"></span> Team Collaboration</li>
                                <li><span className="bullet bullet-success"></span> Time Management</li>
                                <li><span className="bullet bullet-success"></span> Adaptability</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}