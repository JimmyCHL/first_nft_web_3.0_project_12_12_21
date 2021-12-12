import React, { useState, useEffect } from "react";
import "./styles/Main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[selectedPunk]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [selectedPunk]);

  // console.log(activePunk);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_original_url}
              alt=""
            />
          </div>
        </div>

        <div className="rightContainer">
          <div className="punkDetails">
            <div className="title">{activePunk.name}</div>
            {/* alt + 0 1 8 3 to type middle dot · */}
            <span className="itemNumber">&#183;#{activePunk.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img
                src={activePunk.owner.profile_img_url}
                width="100px"
                alt=""
              />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activePunk.owner.address}</div>
                <div className="ownerHandle">
                  @{activePunk.owner.user.username}
                </div>
              </div>
              <div className="ownerLinksGroup">
                <div className="ownerLink">
                  <img src={instagramLogo} alt="" />
                </div>
                <div className="ownerLink">
                  <img src={twitterLogo} alt="" />
                </div>
                <div className="ownerLink">
                  <img src={moreIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
