import React, { useState } from "react";
import close from "../images/close.png";
import "./style.css";
import urlcat from "urlcat";

const BACKEND = process.env.REACT_APP_BACKEND;
const url = urlcat(BACKEND, `/library`);

const Deletelibbutton = ({ bookTitle, setLoading }) => {
  const deletebook = (bookinfo) => {
    fetch(url, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookinfo),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "success") {
          console.log("post deleted");
        }
      })
      .catch((error) => alert("error"));
  };
  const handleClick = () => {
    const bookinfo = { bookTitle };
    deletebook(bookinfo);

    setLoading(true);
  };

  return (
    <>
      <button style={{ width: "50px" }} onClick={handleClick}>
        Delete
      </button>
    </>
  );
};

export default Deletelibbutton;
