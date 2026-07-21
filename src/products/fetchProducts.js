import axios from "axios";

// Product list request
export const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  } 
};
