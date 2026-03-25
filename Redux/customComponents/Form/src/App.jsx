import { Button } from "./Components/button";
import { Form } from "./Components/Form";
import './App.css';


export const App = () => {
  const formData = [
    {
      type: "text",
      name: "userName",
      placeholder: "Enter your Name...",
      id: "username",
    },
    {
      type: "email",
      name: "userEmail",
      placeholder: "Enter your Email...",
      id: "useremail",
    },
    {
      type: "password",
      name: "userPassword",
      placeholder: "Enter your Password...",
      id: "userpassword",
    },
    {
      type: "tel",
      name: "userPhone",
      placeholder: "Enter your Phone...",
      id: "userphone",
    },
     {
      type: "textarea", 
      name: "userAddress",
      placeholder: "Enter your Address...",
      id: "useraddress",
    },
    {
     type: "radio",
     name: "userGender",
     id: "userGender",
     options: ["Male", "Female", "Other"]
}
  ];

  return (
    <>
      <Form data={formData} />

      <Button
        style={{ padding: "0.5rem 2rem", background: "red" }}
        value="login"
      >
        Login
      </Button>

      <Button
        style={{ padding: "0.5rem 2rem", background: "green" }}
        value="signin"
      >
        Sign In
      </Button>
    </>
  );
};