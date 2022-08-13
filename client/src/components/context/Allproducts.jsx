import { createContext, useState } from "react";

export const ProductsContext = createContext();
export const ProductsContextProvider = ({ children }) => {
  const [lists, setLists] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const [favList, setFavList] = useState([]);
  const [filter, setFilter] = useState("");
  const findList = (data) => {
    setLists(data);
  };
  const details = (data) => {
    setSingleProduct(data);
  };
  const getFav = (data) => {
    setFavList([...favList, data]);
  };
  const sortBy = (by) => {
    let arr = lists.sort((a, b) => {
      if (by == "asc") {
        if (a.product_name.toLowerCase() < b.product_name.toLowerCase()) {
          return -1;
        }
      } else if (by == "dsc") {
        if (a.product_name.toLowerCase() > b.product_name.toLowerCase()) {
          return -1;
        }
      }
    });
    setLists([...arr]);
  };
  const removeFav = (productName) => {
    let remianing = favList.filter((el) => el.product_name !== productName);
    console.log(remianing);
    setFavList([...remianing]);
  };
  const searchResult = (data) => {
    setFilter(data);
  };
  console.log(favList);
  return (
    <ProductsContext.Provider
      value={{
        findList,
        lists,
        singleProduct,
        details,
        getFav,
        favList,
        sortBy,
        removeFav,
        searchResult,
        filter,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
