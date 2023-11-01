import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./Item";

import { Outlet } from "react-router-dom";

function App() {

  // const NFTID = "bkyz2-fmaaa-aaaaa-qaaaq-cai";

  return (

      <div className="App">
        <Header />
        <Outlet/>
        {/* <Minter /> */}
        {/* <Item id={NFTID} /> */}
        
        
        <Footer />
      </div>
  );
}

export default App;
