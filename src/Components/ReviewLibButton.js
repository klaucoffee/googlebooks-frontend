import React, { useEffect, useState } from "react";
import edittext from "../images/edit-text.png";
import urlcat from "urlcat";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";

const BACKEND = process.env.REACT_APP_BACKEND;
const url = urlcat(BACKEND, "/review");

const ReviewButton = ({ bookTitle }) => {
  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  //creating review record in datavbase
  const createReviewRecord = (reviewRecord) => {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewRecord),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          //alert("review added");
          //setLoaded(true);
          navigate(`/review/${bookTitle}`);
        }
      })
      .catch((error) => {
        alert("error:", error);
      });
  };

  const savetoReview = () => {
    const reviewRecord = { bookTitle };
    //reviewRecord.reviewId = id;
    reviewRecord.createdOn = dayjs().format("DD-MMM-YYYY");
    console.log("saved to database", reviewRecord);
    createReviewRecord(reviewRecord); //LINK to backend;
  };

  //get all review records back

  const handleClick = (event) => {
    event.preventDefault();

    savetoReview();
  };

  return (
    <>
      <button onClick={handleClick}>Review</button>
    </>
  );
};

export default ReviewButton;
