const ProductCard = ({ project }) => {
  return (
    <div className="card project-item">
      <div className="project-item-header">
        <h2 className="project-item-title">{project.title}</h2>

        <span
          className={`badge ${
            project.status === "Completed"
              ? "badge-success"
              : "badge-warning"
          }`}
        >
          {project.status}
        </span>
      </div>

      <p className="project-item-desc">{project.desc}</p>

      <div className="project-item-tech">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-item-actions">
        <button className="btn btn-primary btn-block">
          Live Demo
        </button>

        <button className="btn btn-outline btn-block">
          GitHub
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
