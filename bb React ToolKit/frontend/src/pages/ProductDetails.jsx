import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../features/products/productSlice";
import { addToCart } from "../features/cart/cartSlice";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  if (loading || !product) return <p>Loading...</p>;

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  return (
    <div className="container">
      <img src={product.image} alt={product.name} width="300" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
        {[...Array(product.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>{x + 1}</option>
        ))}
      </select>
      <button onClick={addToCartHandler}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
