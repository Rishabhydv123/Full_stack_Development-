import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logo}>BigBasket Clone</Link>
      <nav style={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
        {userInfo ? (
          <>
            <span>{userInfo.name}</span>
            <button onClick={logoutHandler}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    background: "#84c225",
    color: "#fff"
  },
  logo: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.2rem"
  },
  nav: {
    display: "flex",
    gap: "1rem",
    alignItems: "center"
  }
};

export default Header;
