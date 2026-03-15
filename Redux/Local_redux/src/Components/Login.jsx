import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Redux/Auth/Action";
import axios from "axios";

export const Login = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.isLoading);

  const [userValue, setUserValue] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: LOGIN_REQUEST });

    axios
      .post("https://reqres.in/api/login", userValue)
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            users: userValue,
            token: res.data.token,
          },
        });
      })
      .catch((err) => {
        console.log("Error:", err);

        dispatch({ type: LOGIN_FAILURE });
      });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "30vh",
          gap: "1rem",
        }}
      >
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={userValue.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={userValue.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};