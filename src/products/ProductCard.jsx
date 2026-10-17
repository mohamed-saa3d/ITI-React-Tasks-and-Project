import { Link } from "react-router-dom";

// الكارد بتاع المنتج اللي جاي من الباك الوهمي (مش التمبليت)
const ProductCard = ({ product }) => {
  // كل منتج له لينك خاص بيه: /products/:id
  const productUrl = `/products/${product.id}`;

  return (
    <div className="card project-item">
      <div className="project-item-header">
        {/* لو ضغطت على العنوان هيروح لصفحة المنتج */}
        <Link to={productUrl} className="project-item-title project-item-link">
          {product.title}
        </Link>

        <span className="badge badge-primary">ID: {product.id}</span>
      </div>

      <p className="project-item-desc">{product.body}</p>

      <div className="project-item-actions">
        {/* فتح تفاصيل المنتج */}
        <Link to={productUrl} className="btn btn-primary btn-block">
          View Product
        </Link>

        {/* مشاركة المنتج -> نفس الـ url الخاص بالمنتج */}
        <Link
          to={`/products/${product.id}/${product.userId}`}
          className="btn btn-outline btn-block"
        >
          Share Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
