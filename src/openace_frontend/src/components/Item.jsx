import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../../declarations/nft";
import { Principal } from "@dfinity/principal";

function Item(props) {
  const [nft, setNFT] = useState({
    name: "",
    owner: "",
    asset: ""
  });

  const id = props.id;
  
  const localHost = "http://localhost:8080/";
  const agent = new HttpAgent({
    host: localHost,
  });

  async function loadNFT() {
    const NFTActor = await Actor.createActor(idlFactory, {
      agent,
      canisterId: id
    });

    const name = await NFTActor.getName();
    const owner = await NFTActor.getOwner();
    const asset = new Uint8Array(await NFTActor.getAsset());

    setNFT({
      name,
      owner: owner.toText(),
      asset: URL.createObjectURL(new Blob([asset.buffer], { type: "image/png" }))
    })
  }

  useEffect(() => {
    loadNFT();
  }, []);

  return (
    <div className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={nft.asset}
        />
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            {nft.name}<span className="purple-text"></span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Owner: {nft.owner}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
