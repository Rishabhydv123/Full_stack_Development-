import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, resetOrderState } from "../features/orders/orderSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);
  const { success, loading, error } = useSelector((state) => state.orders);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  useEffect(() => {
    if (success) {
      dispatch(clearCart());
      dispatch(resetOrderState());
      navigate("/");
    }
  }, [success, dispatch, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createOrder({
        orderItems: cartItems.map((item) => ({
          name: item.name,
          qty: item.qty,
          image: item.image,
          price: item.price,
          product: item._id
        })),
        shippingAddress: {
          address,
          city,
          postalCode,
          country
        },
        totalPrice
      })
    );
  };

  return (
    <div className="form-container">
      <h2>Checkout</h2>
      {error && <p>{error}</p>}
      <form onSubmit={submitHandler}>
        <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
        <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
        <input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} placeholder="Postal Code" required />
        <input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" required />
        <button type="submit">{loading ? "Placing Order..." : `Place Order ₹${totalPrice}`}</button>
      </form>
    </div>
  );
};

export default Checkout;
