import React from "react";
import "./Popup.css";

const Popup = ({ handlePopup }) => {
  return (
    <div>
      {handlePopup?.id && (
        <div className="popupWrapper popup">
          <div>
            <img
              className="popupImage"
              src={handlePopup?.urls?.regular}
              alt={handlePopup?.description}
            />
          </div>
          <div className="downloadImage">
            <a
              download
              rel="noreferrer"
              target="_blank"
              title="Download photo"
              href={handlePopup?.links?.download}
            >
              Download
            </a>
          </div>
          <div className="userInfo">
            <img src={handlePopup?.user?.profile_image?.medium} alt="user" />
            <div>
              <b>{handlePopup?.user?.name}</b>
              <p>{handlePopup?.user?.username}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
