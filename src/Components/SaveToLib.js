import React from "react";
import plus from "../images/plus.png";
import urlcat from "urlcat";

const BACKEND = process.env.REACT_APP_BACKEND;
const url = urlcat(BACKEND, "/library");

const SaveToLib = ({ bookTitle, bookAuthor, thumbnail }) => {
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
        alert("error:", error);
      });
  };

  const saveToLibrary = (event) => {
    event.preventDefault();
    const libraryRecord = { bookTitle, bookAuthor, thumbnail }; //backend

    createLibraryRecord(libraryRecord); //LINK to backend;
  };

  return (
    <>
      <button
        className="iconbts"
        id="plus"
        style={{ color: "tomato" }}
        onClick={saveToLibrary}
      >
        <img src={plus} alt="plus" />
      </button>
    </>
  );
};

export default SaveToLib;
