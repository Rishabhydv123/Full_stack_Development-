import { useState } from "react";
import Home from "./Home";
import Details from "./Details";

function App() {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <button onClick={() => setDisplay(!display)}>
        Show / Hide
      </button>

      <h2>Toggle In ReactJS</h2>

      {display && (
        <>
          <Home />
          <Details />
        </>
      )}
    </>
  );
}

export default App;