import React, { useEffect, useState } from "react";
import Item from "./Item";
import CURRENT_USER_ID from "../index";

import { openace_backend } from "../../../declarations/openace_backend";

function Gallery(props) {
  const [items, setItems] = useState();

  async function getNFTs() {
    const userNFTIds = await openace_backend.getOwnedNFTs(CURRENT_USER_ID);
    if(userNFTIds != undefined) {
      setItems(
        userNFTIds.map((NFTId, index) => (
          <Item id={NFTId} key={index}/>
        ))
      );
    }
  }

  useEffect(() => {
    getNFTs();
  }, []);

  return (
    <div className="gallery-view">
      <h3 className="makeStyles-title-99 Typography-h3">{props.title}</h3>
      <div className="disGrid-root disGrid-container disGrid-spacing-xs-2">
        <div className="disGrid-root disGrid-item disGrid-grid-xs-12">
          <div className="disGrid-root disGrid-container disGrid-spacing-xs-5 disGrid-justify-content-xs-center">
            {items}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
