import React, { useState } from "react";
import heart from "../images/heart.png";
import edittext from "../images/edit-text.png";

const ReviewButton = () => {
  // const [bookTitle, setBookTitle] = useState("");
  // const [bookAuthors, setBookAuthors] = useState("");
  // const [error, setError] = useState("");
  // const [dailyGoalAchieved, setDailyGoalAchieved] = useState(true);
  // const [createdAt, setCreatedAt] = useState("");

  const savetoReview = (event) => {
    event.previewDefault();
    // const reviewRecord = { review }; //backend

    // createReviewRecord(reviewRecord); //LINK to backend;
  };
  return (
    <>
      <button
        className="iconbts"
        id="writing"
        style={{ color: "#bcd2e8" }}
        onClick={savetoReview}
      >
        <img src={edittext} alt="edittext" />
      </button>
    </>
  );
};

export default ReviewButton;
