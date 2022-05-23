import React, { useState, useEffect } from "react";
import urlcat from "urlcat";
import CardLib from "./CardLib";
import "./style.css";

const BACKEND = process.env.REACT_APP_BACKEND;

const Library = () => {
  const [bookData, setBookData] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    const showLibrary = () => {
      fetch(urlcat(BACKEND, "/library"), {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((response) => response.json())
        .then((data) => {
          setBookData(data);
        })
        .catch((error) => alert("error"));
    };
    showLibrary();
  }, []);

  const bookDataArr = Array.from(bookData);
  //console.log(bookDataArr);

  const searchLib = () => {
    if (search.length === 1) {
      ///emptied search
      setFilter(false);
    } else if (search.length > 0) {
      const filterList = bookDataArr.filter((i) => {
        //console.log("i", i.bookTitle.toLowerCase().toLowerCase());
        if (typeof i.bookTitle === "string") {
          return i.bookTitle.toLowerCase().includes(search.toLowerCase());
        }
      });

      setSearchResults(filterList);
      setFilter(true);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    searchLib();
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search within your library"
          value={search}
          onChange={handleChange}
        />
        <button>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="container">
        {filter ? (
          <CardLib bookData={searchResults} />
        ) : (
          <CardLib bookData={bookData} />
        )}
      </div>
    </>
  );
};

export default Library;
