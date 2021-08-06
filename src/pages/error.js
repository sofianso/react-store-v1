import React from "react";
import { Link } from "react-router-dom";

const error = () => {
  return (
    <div>
      <h2>Sorry</h2>
      <p>The page does not exist</p>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default error;
