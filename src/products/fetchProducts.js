import axios from "axios";

// Product list request
// بنرجع الداتا نفسها للـ Component (من غير ما نلمس الـ state هنا)
export const fetchProducts = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data; //إرجاع البيانات لل Component
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Product details request (منتج واحد بالـ id)
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
