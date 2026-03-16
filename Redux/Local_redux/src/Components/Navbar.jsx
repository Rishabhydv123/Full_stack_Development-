import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../Redux/Auth/Action";

export const Navbar = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((store) => store.auth.isAuth);

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/single">SinglePage</Link>

      {isAuth && (
        <button onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};