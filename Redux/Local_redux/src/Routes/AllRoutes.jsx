import { Routes, Route } from "react-router-dom";
import { Login } from "../Components/Login";
import { Home } from "../Pages/Home";
import { PageNotFound404 } from "../Pages/PageNotFound";
import { Todo } from "../Pages/Todo";
import { SinglePage } from "../Pages/SinglePage";
import { Private } from "../Pages/Private";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/single"
        element={
          <Private>
            <SinglePage />
          </Private>
        }
      />

      <Route
        path="/todo"
        element={
          <Private>
            <Todo />
          </Private>
        }
      />

      <Route path="*" element={<PageNotFound404 />} />
    </Routes>
  );
};