import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "./context/Allproducts";
import icon from "./image/icon.png";
import SecondNav from "./SecondNav";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import "./style/Fav.css";
const FavouritesPage = () => {
  const { favList } = useContext(ProductsContext);
  const { details } = useContext(ProductsContext);
  const { removeFav } = useContext(ProductsContext);
  console.log(favList);
  const navigate = useNavigate();
  return (
    <div>
      <SecondNav />
      <div className="header">
        <button
          style={{ backgroundColor: "rgb(114, 160, 114)" }}
          onClick={() => navigate("/")}
        >
          Food List
        </button>
        <button onClick={() => navigate("/favourites")}>Favourites</button>
      </div>
      <div>
        {favList.length > 0 ? (
          favList.map((el, index) => (
            <div className="body-fav" style={{ display: "flex" }}>
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
                <div style={{ display: "flex" }} className="product">
                  {/* <div>
                    {el.product_name?.length > 10
                      ? el.product_name.substring(0, 10) + "..."
                      : el.product_name}
                  </div>
                  <div>
                    {el.generic_name?.length > 7
                      ? el.generic_name.substring(0, 7) + ".."
                      : el.generic_name}
                  </div> */}
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
              <div style={{ marginTop: "25px" }}>
                <RemoveCircleIcon
                  onClick={() => {
                    removeFav(el.product_name);
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <div>
            <h2>Empty !</h2>
            <p>Add some data to favourites</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavouritesPage;
