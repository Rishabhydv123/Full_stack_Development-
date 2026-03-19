import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../Redux/Api/Action";

export const Home = () => {
  const value = useSelector((store) => store.user.userData);
  const dispatch = useDispatch();

  React.useEffect(() => {
    userData(dispatch);
  }, [dispatch]);

  console.log("value:", value);

  return <div>Home</div>;
};