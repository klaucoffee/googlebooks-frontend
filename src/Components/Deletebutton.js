import React from "react";
import { useNavigate } from "react-router-dom";
import urlcat from "urlcat";
import deletepic from "../images/delete.png";

const BACKEND = process.env.REACT_APP_BACKEND;

const Deletebutton = ({ bookTitle }) => {
  const navigate = useNavigate();

  //delete journal entry
  const deleteReview = (bookTitle) => {
    const url = urlcat(BACKEND, `/review`);

    fetch(url, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookTitle),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "success") {
          alert("post deleted");
        }
      })
      .catch((error) => alert("error"));
  };

  const handleClick = () => {
    console.log("click");
    deleteReview(bookTitle);
    //navigate("/review")
  };
  return (
    <>
      <button onClick={handleClick}>
        <img class="deletepic" src={deletepic} alt="deletepic" />
      </button>
    </>
  );
};

export default Deletebutton;
