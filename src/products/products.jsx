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
    <><h1>Fetching Products...</h1>
    {/* هنا هظهر المنتجات اللي جايه من الباك
    علشان انا بستخدم async await فالصفحة مش هتتعرض غير لما يجيب المنتجات
    ولازم فصل واضح بينها وبين التمبليت اللي مجرد ui فقد */}
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
      </div></>
  );
};

export default Products;