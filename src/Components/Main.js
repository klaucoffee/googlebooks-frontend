import React, { useEffect, useState } from "react";

import "./style.css";
import pic4 from "../images/pic4.jpg";
import Card from "./Card";

const API_KEY = process.env.REACT_APP_APIKEY;

const Main = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [load, setLoad] = useState(false); //not coded yet
  const [error, setError] = useState(null); //not coded yet

  //   GET https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key={API_KEY}
  //GooglebooksAPI only can get max 40 results

  const googlebooksURL = `https://www.googleapis.com/books/v1/volumes?q='+${search}+'&orderBy=relevance&key=${API_KEY}+&maxResults=40`;

  const searchBook = () => {
    fetch(googlebooksURL)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.items);

        setLoad(true);
      })
      .catch((error) => {
        console.log("There is an error");
      });
  };

  const onKeyUp = (e) => {
    if (e === "Enter") {
      searchBook(search);
    }
  };

  const handleSubmit = () => {
    searchBook(search);
  };

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
            <input
              type="text"
              placeholder="Enter the book title"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyUp={(e) => onKeyUp(e.key)}
            />
            <button onClick={handleSubmit}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <img src={pic4} alt="bookcupboard" />
          <h3>Real example of my bookshelf</h3>
        </div>
      </div>
      <div className="container">
        {load ? <Card book={searchResults} /> : <p></p>}
      </div>
    </>
  );
};

export default Main;
