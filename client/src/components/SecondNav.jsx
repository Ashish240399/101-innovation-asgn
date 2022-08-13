import React from "react";
import { Link } from "react-router-dom";
import "./style/SecondNav.css";
const SecondNav = () => {
  return (
    <div className="SecondNav">
      <p>
        <Link to="/">TheFoodList</Link>
      </p>
    </div>
  );
};

export default SecondNav;
