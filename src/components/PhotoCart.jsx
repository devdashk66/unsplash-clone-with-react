import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Popup from "./Popup/Popup";

const PhotoCart = ({ comName }) => {
  const [photos, setPhotos] = useState([]);
  const [popupArry, setPopupArry] = useState([]);
  const [toggle, setToggle] = useState(false);

  let query = 0;
  let featured = comName;

  let url = `https://api.unsplash.com/search/photos?page=${query}&per_page=30&query=${featured}&client_id=7rZCr4g4T9pmpdZ9Chw8B60qfv6PotjqGkXE6uMAUyM`;

  const peginationClick = (event) => {
    query = event.target.innerText;
    url = `https://api.unsplash.com/search/photos?page=${query}&per_page=30&query=${featured}&client_id=7rZCr4g4T9pmpdZ9Chw8B60qfv6PotjqGkXE6uMAUyM`;
    console.log(query);
    console.log(url);
    console.log(featured);
    fetchRequest();
    window.scrollTo(0, 0);
  };

  const fetchRequest = async () => {
    const data = await fetch(url);
    const dataJ = await data.json();
    const result = dataJ.results;
    setPhotos(result);
    document.title = `${
      featured === "Random" ? "Beautiful Free Image & Picture" : featured
    } | Unsplash`;
  };

  const fetchReq = (inputValue) => {
    featured = inputValue;
    url = `https://api.unsplash.com/search/photos?page=${query}&per_page=30&query=${featured}&client_id=7rZCr4g4T9pmpdZ9Chw8B60qfv6PotjqGkXE6uMAUyM`;
    fetchRequest();
    console.log();
  };

  useEffect(() => {
    document.title = "Beautiful Free Image & Picture";
    fetchRequest();
  }, [comName]);

  const handlePopup = (event) => {
    let id = event?.target?.getAttribute("id");
    let popupPhotos = photos?.filter((photo) => photo?.id === id);
    setPopupArry(popupPhotos[0]);
    setToggle(true);
  };

  const handleHide = () => {
    setToggle(false);
  };
  return (
    <>
      <div className="app">
        <div className="wrapper">
          <Header fetchReq={fetchReq} />
        </div>
        <div className="hero">
          {
            <div
              className="hero_bannar"
              style={{
                background: `linear-gradient( #00000060, #000000c7), url('${photos[16]?.urls?.regular}')`,
              }}
            >
              <div className="hero_banner_text">
                <h1>Unplash</h1>
                <p>{photos[16]?.alt_description}</p>
                <button>Submit to {comName}</button>
              </div>
            </div>
          }
        </div>
        <div className="wrapper">
          <div className=" flex items-center sm:w-[100%] m-auto md:w-[100%] lg:w-[1170px] flex-wrap gap-3 justify-center">
            {photos?.map((photo) => (
              <div key={photo?.id} className="photos">
                <img
                  id={photo?.id}
                  onClick={handlePopup}
                  className="rounded-lg"
                  src={photo?.urls?.regular}
                  alt={photo?.description}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="pegination">
            <button onClick={peginationClick}>1</button>
            <button onClick={peginationClick}>2</button>
            <button onClick={peginationClick}>3</button>
            <button onClick={peginationClick}>4</button>
            <button onClick={peginationClick}>6</button>
            <button onClick={peginationClick}>7</button>
            <button onClick={peginationClick}>8</button>
            <button onClick={peginationClick}>9</button>
            <button onClick={peginationClick}>10</button>
          </div>
        </div>
        {toggle && (
          <div onClick={handleHide} className="popudp">
            <Popup handlePopup={popupArry} />
          </div>
        )}
      </div>
    </>
  );
};

export default PhotoCart;
