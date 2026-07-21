import { useEffect } from "react";
import { fetchProducts } from "./fetchProducts";
import { projects } from "./projects";
import ProductCard from "./ProductCard";
import "./products.css";

const Products = () => {
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <div className="products-header">
        <h1 className="products-title">Portfolio Projects</h1>
        <p className="products-subtitle">
          A collection of my recent work
        </p>
      </div>

      <div className="products-grid">
        {projects.map((project) => (
          <ProductCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default Products;