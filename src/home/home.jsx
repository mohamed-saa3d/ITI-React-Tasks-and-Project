import "./home.css";

export default function Home() {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="card home-hero">
                <h1 className="home-hero-title">
                    Welcome to my <span className="text-primary">Portfolio</span>
                </h1>
                <p className="home-hero-desc">
                    Hi, my name is Mohamed Saad. I am a passionate Frontend Developer specializing in React and modern web technologies.
                </p>
                <div className="home-hero-actions">
                    <button className="btn btn-primary">
                        View Projects
                    </button>
                    <button className="btn btn-outline">
                        Contact Me
                    </button>
                </div>
            </section>

            {/* About Preview */}
            <section className="home-grid">
                <div className="card home-section">
                    <h2 className="home-section-title">About Me</h2>
                    <p className="home-section-text">
                        I am a dedicated developer focused on creating intuitive, fast, and accessible user experiences. I love learning new technologies and applying them to solve real-world problems.
                    </p>
                </div>
                <div className="card home-section">
                    <h2 className="home-section-title">Core Skills</h2>
                    <div className="home-skills">
                        {['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git'].map(skill => (
                            <span key={skill} className="skill-tag">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects Preview */}
            <section className="card home-section">
                <div className="home-section-header">
                    <h2 className="home-section-title">Featured Projects</h2>
                    <span className="home-section-link">View All</span>
                </div>
                <div className="home-projects">
                    {[1, 2, 3].map(item => (
                        <div key={item} className="project-card">
                            <div className="project-card-image"></div>
                            <h3 className="project-card-title">Project {item}</h3>
                            <p className="project-card-desc">A brief description of this amazing project and what it does.</p>
                            <span className="badge badge-primary">React</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}