import React from "react";
import "./style.css";
import pic4 from "../images/pic4.jpg";

const main = () => {
  return (
    <div>
      <div className="header">
        <div className="row1">
          <h1> The world belongs to those who read - Rick Holland</h1>
        </div>
        <div className="row2">
          <h2>Search for Books</h2>
          <div className="search">
            <input type="text" placeholder="Enter the book title" />
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <img src={pic4} alt="bookcupboard" />
        </div>
      </div>
    </div>
  );
};

export default main;
