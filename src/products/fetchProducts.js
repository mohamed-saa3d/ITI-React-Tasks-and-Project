import api from "../api/axios";

// Product list request
// لاحظ: مفيش عنوان كامل هنا! الـ baseURL موجود في الـ instance
// وكمان مفيش try/catch للتعامل مع الأخطاء -> الـ interceptor عملها مرة واحدة
// بنرجع الداتا نفسها للـ Component (من غير ما نلمس الـ state هنا)
export const fetchProducts = async () => {
  const response = await api.get("/posts");
  return response.data; //إرجاع البيانات لل Component
};

// Product details request (منتج واحد بالـ id)
export const fetchProductById = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};
