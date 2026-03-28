import React from "react";
import Admin from "./Admin";
import User from "./User";
import { useState } from "react";
import { use } from "react";
import { Eye, EyeOff} from "lucide-react";

function App() {
  // const [role, setRole] = useState("User");

  const [showpass,setPass] = useState(false);

  return(
   <> 
  {/* // {role === "Admin" ? <Admin/> : <User/>}
  // <button onClick={() => */}
  {/* //   setRole(role==="Admin" ? "User":"Admin")}> */}
  {/* //   Switch TO {role==="Admin"? "User":"Admin"} */}
  {/* //   </button> */}

  <div>
    <input type ={showpass?"text":"password"} placeholder="Enter your Password"/>
  </div>
  <div>
     <button onClick={() =>setPass(!showpass)}>
      {/* {showpass?"Hide":"Show"} */}
      {showpass ? <Eye size={10} /> : <EyeOff size={10} />}

     </button>
  </div>
  </>
);
}

export default App;