import React from "react";
import { useContext } from "react";
import { ProductsContext } from "./context/Allproducts";
import icon from "./image/icon.png";
import SecondNav from "./SecondNav";
import "./style/Details.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
const DetailsPage = () => {
  const { singleProduct } = useContext(ProductsContext);
  const { getFav } = useContext(ProductsContext);
  const { favList } = useContext(ProductsContext);
  const { removeFav } = useContext(ProductsContext);
  let present = false;
  for (let i = 0; i < favList.length; i++) {
    if (favList[i].product_name == singleProduct.product_name) {
      present = true;
      break;
    }
  }
  console.log(singleProduct);
  return (
    <div>
      <div className="second_nav">
        <SecondNav />
      </div>
      <div className="header-details">
        {singleProduct && (
          <div style={{ display: "flex" }}>
            <div className="image-div">
              <img src={icon} alt="icon" />
            </div>
            <div className="pro-name-div">
              <span>{singleProduct.product_name}</span>
              <span>{singleProduct.generic_name}</span>
              <div>
                {/* <button
                  onClick={() => {
                    if (present == false) {
                      getFav(singleProduct);
                    } else {
                      removeFav(singleProduct.product_name);
                    }
                  }}
                >
                  {present == true
                    ? "Remove from favourites"
                    : "Add to favourites"}
                </button> */}
                {present == false && (
                  <FavoriteBorderIcon onClick={() => getFav(singleProduct)} />
                )}
                {present == true && (
                  <FavoriteIcon
                    onClick={() => removeFav(singleProduct.product_name)}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="body">
        {singleProduct && (
          <table>
            <tr>
              <td>URL</td>
              <td>
                <a href={singleProduct.url} target="_blank">
                  Link
                </a>
              </td>
            </tr>
            <tr>
              <td>Container</td>
              <td>
                {singleProduct.packaging?.length > 10
                  ? singleProduct.packaging.substring(0, 10) + ".."
                  : singleProduct.packaging}
              </td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>{singleProduct.quantity}</td>
            </tr>
            <tr>
              <td>Serving Size</td>
              <td>{singleProduct.serving_size}</td>
            </tr>
            <tr>
              <td>Energy 100g</td>
              <td>{singleProduct.energy_100g}</td>
            </tr>
            <tr>
              <td>Energy from Fat 100g</td>
              <td>{singleProduct.energy_from_fat_100g}</td>
            </tr>
            <tr>
              <td>Carbohydrates 100g</td>
              <td>{singleProduct.carbohydrates_100g}</td>
            </tr>
            <tr>
              <td>Cholesterol 100g</td>
              <td>{singleProduct.cholesterol_100g}</td>
            </tr>
            <tr>
              <td>Sodium 100g</td>
              <td>{singleProduct.sodium_100g}</td>
            </tr>
            <tr>
              <td>Sugar 100g</td>
              <td>{singleProduct.sugars_100g}</td>
            </tr>
            <tr>
              <td>Salt 100g</td>
              <td>{singleProduct.salt_100g}</td>
            </tr>
            <tr>
              <td>Proteins 100g</td>
              <td>{singleProduct.proteins_100g}</td>
            </tr>
            <tr>
              <td>Omega 3 fat 100g</td>
              <td>{singleProduct.proteins_100g}</td>
            </tr>
            <tr>
              <td>Fat 100g</td>
              <td>{singleProduct.fat_100g}</td>
            </tr>
          </table>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
