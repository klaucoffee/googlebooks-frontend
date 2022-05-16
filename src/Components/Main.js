import React from "react";
import "./style.css";
import pic4 from "../images/pic4.jpg";
import Card from "./Card";

const main = () => {
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            Reading builds worlds
            <br /> in our minds
          </h1>
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
          <h3>Real example of my bookshelf</h3>
        </div>
      </div>
      <div className="container">
        <Card />
      </div>
    </>
  );
};

export default main;
