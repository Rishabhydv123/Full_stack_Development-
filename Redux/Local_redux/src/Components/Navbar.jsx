import { Link } from "react-router-dom";

export const Navbar = () => {
  const nav = [
    { path: "/", element: "home" },
    { path: "/login", element: "login" },
    { path: "/single", element: "singlePage" },
  ];

  return (
    <>
      {nav.map((item, i) => {
        return (
          <Link key={i} to={item.path}>
            {item.element}
          </Link>
        );
      })}
    </>
  );
};