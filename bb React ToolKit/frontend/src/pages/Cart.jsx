import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkoutHandler = () => {
    navigate("/checkout");
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty <Link to="/">Go Shopping</Link></p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} style={styles.row}>
              <img src={item.image} alt={item.name} width="80" />
              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price} x {item.qty}</p>
              </div>
              <button onClick={() => dispatch(removeFromCart(item._id))}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button onClick={checkoutHandler}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

const styles = {
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
    borderBottom: "1px solid #ddd",
    paddingBottom: "1rem"
  }
};

export default Cart;
