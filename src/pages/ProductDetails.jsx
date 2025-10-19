import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  //  Retrieving the passed id as a params.
  const { id } = useParams();
  // console.log(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const result = await response.json();
        setProduct(result);
        // console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Product Details</h2>
      {product ? (
        <div className="product-details">
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <h4>${product.price}</h4>
          <h5>{product.description}</h5>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductDetails;
