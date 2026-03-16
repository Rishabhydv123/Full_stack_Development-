import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../Redux/Auth/Action";

export const Login = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.auth.isLoading);

  const [userValue, setUserValue] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserValue({
      ...userValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: LOGIN_REQUEST });

    axios
      .post("https://reqres.in/api/login", userValue)
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            user: userValue,
            token: res.data.token,
          },
        });
      })
      .catch(() => {
        dispatch({ type: LOGIN_FAILURE });
      });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        placeholder="email"
        value={userValue.email}
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="password"
        value={userValue.password}
        onChange={handleChange}
      />

      <button type="submit">Login</button>
    </form>
  );
};