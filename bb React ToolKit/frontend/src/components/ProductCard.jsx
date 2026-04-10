import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p>₹{product.price}</p>
      <Link to={`/product/${product._id}`}>View</Link>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "1rem",
    borderRadius: "10px"
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover"
  }
};

export default ProductCard;
