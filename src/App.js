import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import punk from "./assets/punks/punks/5.jpg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [collections, setCollections] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      // api for fetching collections data from NFT projects
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0xDb926749Cb6465A6D65CB4FCF1C7EF34338575C4"
      );
      console.log(openseaData.data.assets);
      setCollections(openseaData.data.assets);
      return;
    };
    getMyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      {collections.length > 0 && (
        <>
          <Main selectedPunk={selectedPunk} punkListData={collections} />
          <PunkList
            punkListData={collections}
            setSelectedPunk={setSelectedPunk}
          />
          <div
            style={{
              marginTop: "5px",
              borderTop: "1px solid white",
              height: "5px",
              backgroundColor: "white",
            }}
          ></div>
        </>
      )}
    </div>
  );
}

export default App;
