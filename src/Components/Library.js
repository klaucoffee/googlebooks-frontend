import React, { useState } from "react";
import heart from "../images/heart.png";

import urlcat from "urlcat";
const BACKEND = process.env.REACT_APP_BACKEND;
const url = urlcat(BACKEND, "/library");

const Library = ({ bookTitle, bookAuthor, thumbnail }) => {
  // const [bookTitle, setBookTitle] = useState("");
  // const [bookAuthors, setBookAuthors] = useState("");
  // const [error, setError] = useState("");
  // const [dailyGoalAchieved, setDailyGoalAchieved] = useState(true);
  // const [createdAt, setCreatedAt] = useState("");

  const createLibraryRecord = (libraryRecord) => {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(libraryRecord),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          alert("book added to library");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const saveToLibrary = (event) => {
    event.preventDefault();
    const libraryRecord = { bookTitle, bookAuthor, thumbnail }; //backend
    console.log("libraryRecord", libraryRecord);
    createLibraryRecord(libraryRecord); //LINK to backend;
    // alert("book added to your library");
  };

  return (
    <>
      <button
        className="iconbts"
        id="heart"
        style={{ color: "tomato" }}
        onClick={saveToLibrary}
      >
        <img src={heart} alt="heart" />
      </button>
    </>
  );
};

export default Library;
