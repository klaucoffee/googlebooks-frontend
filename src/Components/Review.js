import React, { useState } from "react";
import heart from "../images/heart.png";
import edittext from "../images/edit-text.png";

const Review = () => {
  // const [bookTitle, setBookTitle] = useState("");
  // const [bookAuthors, setBookAuthors] = useState("");
  // const [error, setError] = useState("");
  // const [dailyGoalAchieved, setDailyGoalAchieved] = useState(true);
  // const [createdAt, setCreatedAt] = useState("");

  return (
    <>
      <button className="iconbts" id="writing" style={{ color: "#bcd2e8" }}>
        <img src={edittext} alt="edittext" />
      </button>
    </>
  );
};

export default Review;
