import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Minter from "./components/Minter";
import Gallery from "./components/Gallery";

import { Principal } from "@dfinity/principal";

import homeImage from "../assets/home-img.png";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

const CURRENT_USER_ID = Principal.fromText("2vxsx-fae");
export default CURRENT_USER_ID;

const init = async () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />} >
        <Route exact index path="/" element={<img className="bottom-space" src={homeImage} />} />
        <Route path="/discover" element={<h1>Discover</h1>} />                            
        <Route path="/minter" element={<Minter />} />
        <Route path="/collection" element={<Gallery title="My NFTs"/>} />

        {/* <Route path="*" element={<img className="bottom-space" src={homeImage} />} /> */}
      </Route>
    )
  )
  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
};

init();
