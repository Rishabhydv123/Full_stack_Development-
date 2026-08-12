import React from "react";

function Details() {
  return (
    <>
      <h1>Personal Details</h1>

      <form>
        <label>Name:</label><br />
        <input type="text" name="name" required /><br /><br />

        <label>Email:</label><br />
        <input type="email" name="email" required /><br /><br />

        <label>Age:</label><br />
        <input type="number" name="age" required /><br /><br />

        <button type="submit">Submit</button>
      </form>
      
    </>
    
  );
}

export default Details;