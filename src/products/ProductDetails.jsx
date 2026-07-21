import { useParams } from "react-router-dom";
import "./products.css";

const ProductDetails = () => {
  const params = useParams();

  return (
    <div className="card text-center project-details-view">
      <h1 className="project-details-title">Project Details</h1>

      <div className="project-details-info">
        <p>
          <strong>ID:</strong> {params.id}
        </p>

        {params.name && (
          <p>
            <strong>Name:</strong> {params.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
