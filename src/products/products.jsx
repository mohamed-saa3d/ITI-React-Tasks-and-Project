import { useParams } from "react-router-dom";
import "./products.css";

const ProductsDetails = (props) => {
    const params = useParams();

    // Mock project data (ideally this would come from state or props)
    const projects = [
        { id: 1, title: "E-Commerce Store", desc: "A full-stack online store with shopping cart.", tech: ["React", "Node.js"], status: "Completed" },
        { id: 2, title: "Task Manager", desc: "A productivity app for tracking daily tasks.", tech: ["React", "Tailwind"], status: "In Progress" },
        { id: 3, title: "Portfolio Website", desc: "Personal portfolio showcasing my work.", tech: ["React", "CSS"], status: "Completed" },
        { id: 4, title: "Weather Dashboard", desc: "Real-time weather data using public APIs.", tech: ["JavaScript", "HTML/CSS"], status: "Completed" },
    ];

    // If ID is provided, show detail view, otherwise show list
    if (params.id) {
        return (
            <div className="card text-center project-details-view">
                <h1 className="project-details-title">Project Details</h1>
                <div className="project-details-info">
                    <p><strong>ID:</strong> {params.id}</p>
                    {params.name && <p><strong>Name:</strong> {params.name}</p>}
                </div>
            </div>
        );
    }

    return (
        <div className="products-container">
            <div className="products-header">
                <h1 className="products-title">Portfolio Projects</h1>
                <p className="products-subtitle">A collection of my recent work</p>
            </div>

            <div className="products-grid">
                {projects.map(project => (
                    <div key={project.id} className="card project-item">
                        <div className="project-item-header">
                            <h2 className="project-item-title">{project.title}</h2>
                            <span className={`badge ${project.status === 'Completed' ? 'badge-success' : 'badge-warning'}`}>
                                {project.status}
                            </span>
                        </div>
                        <p className="project-item-desc">{project.desc}</p>
                        
                        <div className="project-item-tech">
                            {project.tech.map(t => (
                                <span key={t} className="tech-tag">{t}</span>
                            ))}
                        </div>

                        <div className="project-item-actions">
                            <button className="btn btn-primary btn-block">Live Demo</button>
                            <button className="btn btn-outline btn-block">GitHub</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsDetails;