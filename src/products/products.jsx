import { useParams } from "react-router-dom";
import "./products.css";

const ProductsDetails = (props) => {

    const params = useParams();
    console.log(params);

    return (
        <div>
            <h1>Product Details</h1>
            <p>Product ID: {params.id}</p>
            <p>Product Name: {params.name}</p>
        </div>
    );
}

export default ProductsDetails;