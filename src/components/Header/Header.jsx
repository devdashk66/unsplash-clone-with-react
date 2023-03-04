import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaUserCircle } from "react-icons/fa";

const Header = ({ fetchReq }) => {
  const [search, setSearch] = useState("");
  const [activeItem, setActiveItem] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchReq(search);
  };

  const inputValue = (event) => {
    setSearch(event.target.value);
  };

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="header">
      <div className="headerTop">
        <div className="logo">
          <img src="./img/unsplash.png" alt="logo" />
          <div className="search">
            <form onSubmit={handleSubmit} className="search">
              <input
                id="top"
                onChange={inputValue}
                placeholder="Search high-resolution images"
                type="text"
              />
            </form>
          </div>
        </div>

        <div className="user">
          <button>Submit a photo</button>
          <FaUserCircle />
        </div>
      </div>

      <ul>
        <li
          className={activeItem === 0 ? "active" : ""}
          onClick={() => handleItemClick(0)}
        >
          <Link to="/">Editorial</Link>
        </li>
        <li
          className={activeItem === 1 ? "active" : ""}
          onClick={() => handleItemClick(1)}
        >
          <Link to="/people">People</Link>
        </li>
        <li>|</li>
        <li
          className={activeItem === 2 ? "active" : ""}
          onClick={() => handleItemClick(2)}
        >
          <Link to="/wallpaper">Wallpaper</Link>
        </li>
        <li
          className={activeItem === 3 ? "active" : ""}
          onClick={() => handleItemClick(3)}
        >
          <Link to="/3dranders">3D Renders</Link>
        </li>
        <li
          className={activeItem === 4 ? "active" : ""}
          onClick={() => handleItemClick(4)}
        >
          <Link to="/travel">Travel</Link>
        </li>
        <li
          className={activeItem === 5 ? "active" : ""}
          onClick={() => handleItemClick(5)}
        >
          <Link to="/nature">Nature</Link>
        </li>
        <li
          className={activeItem === 6 ? "active" : ""}
          onClick={() => handleItemClick(6)}
        >
          <Link to="/streetphotography">Street Photography</Link>
        </li>
        <li
          className={activeItem === 7 ? "active" : ""}
          onClick={() => handleItemClick(7)}
        >
          <Link to="/experimental">Experimental</Link>
        </li>
        <li
          className={activeItem === 8 ? "active" : ""}
          onClick={() => handleItemClick(8)}
        >
          <Link to="/textures-patterns">Textures & Patterns</Link>
        </li>
        <li
          className={activeItem === 9 ? "active" : ""}
          onClick={() => handleItemClick(9)}
        >
          <Link to="/animals">Animals</Link>
        </li>
        <li
          className={activeItem === 10 ? "active" : ""}
          onClick={() => handleItemClick(10)}
        >
          <Link to="/architecture-interiors">Architecture & Interiors</Link>
        </li>
        <li
          className={activeItem === 11 ? "active" : ""}
          onClick={() => handleItemClick(11)}
        >
          <Link to="/fashion-beauty">Fashion & Beauty</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
