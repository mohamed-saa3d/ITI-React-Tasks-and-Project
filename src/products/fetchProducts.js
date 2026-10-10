import axios from "axios";

// Product list request
export const fetchProducts = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data; //إرجاع البيانات لل Component
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
