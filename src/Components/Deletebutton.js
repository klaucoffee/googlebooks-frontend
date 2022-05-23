import React from "react";
import { useNavigate } from "react-router-dom";
import urlcat from "urlcat";
import deletepic from "../images/delete.png";

const BACKEND = process.env.REACT_APP_BACKEND;
const url = urlcat(BACKEND, `/review`);

const Deletebutton = ({ bookTitle }) => {
  const navigate = useNavigate();

  //delete journal entry
  const deleteReview = (bookinfo) => {
    console.log(JSON.stringify(bookinfo));
    console.log("url", url);
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
          alert("post deleted");
        }
      })
      .catch((error) => alert("error"));
  };

  const handleClick = () => {
    console.log("click");
    const bookinfo = { bookTitle };
    deleteReview(bookinfo);
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
