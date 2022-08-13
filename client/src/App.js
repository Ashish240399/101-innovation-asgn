import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailsPage from "./components/DetailsPage";
import FavouritesPage from "./components/FavouritesPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/details" element={<DetailsPage />}></Route>
        <Route path="/favourites" element={<FavouritesPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
