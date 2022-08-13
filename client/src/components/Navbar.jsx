import React, { useContext, useEffect } from "react";
import MenuListComposition from "./Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { ProductsContext } from "./context/Allproducts";
import { Link } from "react-router-dom";
import "./style/Navbar.css";
const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const { searchResult } = useContext(ProductsContext);
  return (
    <div className="navbar">
      <div className="Logo">
        <p>
          <Link to="/">TheFoodList</Link>
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex" }}>
          <SearchIcon
            onClick={() => {
              setShowInput(!showInput);
            }}
          />
          <input
            style={{ width: "100px" }}
            onChange={(e) => searchResult(e.target.value)}
            className={`${showInput ? "open" : "hidden"}`}
          />
        </div>
        <div className="icons">
          <MenuListComposition />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
