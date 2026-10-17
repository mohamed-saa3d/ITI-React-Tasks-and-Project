import { useEffect, useState } from "react";
import { fetchProducts } from "./fetchProducts";
import ProductCard from "./ProductCard";
import "./products.css";

const Products = () => {
  // 1) الحالة: الداتا اللي جاية من الباك + التحميل + الخطأ
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2) أول ما الصفحة تفتح بنجيب المنتجات من الباك الوهمي
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products, please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="products-container">
          <div className="products-header">
              <h1 className="products-title">Portfolio Projects</h1>
              <p className="products-subtitle">
                  A collection of my recent work
              </p>
          </div>

          {/* هنا هظهر المنتجات اللي جايه من الباك */}
          {loading && <h2 className="products-state">Fetching Products...</h2>}

          {error && <h2 className="products-state products-state-error">{error}</h2>}

          {!loading && !error && (
              <div className="products-grid">
                  {products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                  ))}
              </div>
          )}
      </div>
  );
};

export default Products;