import { useEffect, useState } from "react";
import { fetchProducts } from "./fetchProducts";
import ProductCard from "./ProductCard";
import "./products.css";

// عدد المنتجات اللي تظهر في كل صفحة (رقم ثابت نقدر نغيره من هنا بس)
const PRODUCTS_PER_PAGE = 6;

const Products = () => {
  // 1) الحالة: الداتا اللي جاية من الباك + التحميل + الخطأ
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2) حالة الباجينيشن: الصفحة الحالية اللي المستخدم واقف عليها
  const [currentPage, setCurrentPage] = useState(1);

  // 3) أول ما الصفحة تفتح بنجيب المنتجات من الباك الوهمي
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

  // 4) نحسب عدد الصفحات من عدد المنتجات (بنقسم على 6 وبنقرّب لفوق)
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  // 5) بنقص الجزء الخاص بالصفحة الحالية بس من كل المنتجات
  //    مثال: صفحة 3 و 6 في الصفحة => من المنتج 13 لـ 18
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const productsOnPage = products.slice(startIndex, endIndex);

  // 6) دالة التنقل بين الصفحات
  const goToPage = (page) => {
    // نمنع أي رقم أقل من 1 أو أكبر من عدد الصفحات
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
    // نرجّع المستخدم لفوق الصفحة عشان يشوف المنتجات الجديدة من الأول
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="products-container">
      <div className="products-header">
        <h1 className="products-title">Portfolio Projects</h1>
        <p className="products-subtitle">A collection of my recent work</p>
      </div>

      {/* هنا هظهر المنتجات اللي جايه من الباك */}
      {loading && <h2 className="products-state">Fetching Products...</h2>}

      {error && <h2 className="products-state products-state-error">{error}</h2>}

      {!loading && !error && (
        <>
          {/* معلومات بسيطة للمستخدم: بيشوف إيه من إيه */}
          <p className="pagination-info">
            Showing {startIndex + 1}-{Math.min(endIndex, products.length)} of{" "}
            {products.length} products
          </p>

          <div className="products-grid">
            {productsOnPage.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* أزرار الباجينيشن */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-btn"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>

              {/* بنعمل زر لكل صفحة (بسيطة ومفهومة للمبتدئ) */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`pagination-btn ${page === currentPage ? "pagination-btn-active" : ""
                    }`}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              ))}

              <button
                className="pagination-btn"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;