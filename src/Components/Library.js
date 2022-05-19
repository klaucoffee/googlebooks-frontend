import React, { useState, useEffect } from "react";
import urlcat from "urlcat";
import Card from "./Card";

const BACKEND = process.env.REACT_APP_BACKEND;
const url = urlcat(BACKEND, "/library");

const Library = () => {
  //fetch all journal entries
  // const [bookTitle, setBookTitle] = useState("");
  // const [bookAuthors, setBookAuthors] = useState("");
  // const [thumbnail, setThumbnail] = useState("");
  // const [error, setError] = useState("");
  // const [createdAt, setCreatedAt] = useState("");
  const [bookData, setBookData] = useState("");

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
        .catch((error) => console.log(error));
    };
    showLibrary();
  }, []);

  //console.log(bookData);
  //WRITE FOR LOOP HERE

  //NOT SURE IF CARD WILL WORK
  return <div>{<Card bookData={bookData} />}</div>;
};

export default Library;
