import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "./context/Allproducts";
import icon from "./image/icon.png";
import Navbar from "./Navbar";
import "./style/Home.css";
const HomePage = () => {
  const { findList } = useContext(ProductsContext);
  const { lists } = useContext(ProductsContext);
  const { details } = useContext(ProductsContext);
  const { filter } = useContext(ProductsContext);
  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const data = await fetch("http://localhost:8080/products");
    const res = await data.json();

    findList(res);
  };
  console.log(lists);
  return (
    <div>
      <Navbar />
      <div className="header">
        <button onClick={() => navigate("/")}>Food List</button>
        <button
          style={{ backgroundColor: "rgb(114, 160, 114)" }}
          onClick={() => navigate("/favourites")}
        >
          Favourites
        </button>
      </div>
      <div className="body">
        {lists.length > 0 &&
          lists
            .filter((el) =>
              el.product_name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((el, index) => (
              <div
                onClick={() => {
                  details(el);
                  navigate("/details");
                }}
                style={{ display: "flex" }}
                key={index}
              >
                <div style={{ marginRight: "7px" }} className="image-div">
                  <img src={icon} alt="icon" />
                </div>
                <div className="product">
                  <b>
                    <span>
                      {el.product_name?.length > 10
                        ? el.product_name.substring(0, 10) + "..."
                        : el.product_name}
                    </span>
                    <span>
                      (
                      {el.generic_name?.length > 7
                        ? el.generic_name.substring(0, 7) + ".."
                        : el.generic_name}
                      )
                    </span>
                  </b>
                  <div className="line"></div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default HomePage;
