import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductById } from "./fetchProducts";
import "./products.css";

const ProductDetails = () => {
  // بناخد الـ id من اللينك نفسه: /products/:id
  const params = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchProductById(params.id);
        setProduct(data);
      } catch (err) {
        setError("Failed to load this product.");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [params.id]);

  if (loading) {
    return <h2 className="products-state">Fetching Product...</h2>;
  }

  if (error) {
    return <h2 className="products-state products-state-error">{error}</h2>;
  }

  return (
    <div className="card project-details-view">
      <h1 className="project-details-title">{product.title}</h1>

      <div className="project-details-info">
        <p>
          <strong>ID:</strong> {product.id}
        </p>

        <p>
          <strong>User ID:</strong> {product.userId}
        </p>

        {/* الـ name في اللينك اختياري (بيستخدم في المشاركة) */}
        {params.name && (
          <p>
            <strong>Shared by user:</strong> {params.name}
          </p>
        )}

        <p>
          <strong>Description:</strong> {product.body}
        </p>
      </div>

      <div className="project-details-actions">
        <Link to="/products" className="btn btn-outline">
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
