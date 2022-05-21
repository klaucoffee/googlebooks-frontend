import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import urlcat from "urlcat";

const Reviewbook = () => {
  const { id } = useParams();
  const [review, setReview] = useState("");
  const BACKEND = process.env.REACT_APP_BACKEND;

  //replace strings with %20
  const replaceSpaces = (input) => {
    let rep = "%20";
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        input = input.replace(input[i], rep);
      }
    }
    return input;
  };

  let replacedId = replaceSpaces(id);

  //const url = urlcat(BACKEND, "/review" + id);
  let url = urlcat(BACKEND, `review/${replacedId}`);
  //   console.log("id", id);
  //   console.log(review);
  url.toString();
  console.log(url);

  ////////////CREATE REVIEW////////////
  const createReview = (reviewInfo) => {
    console.log(JSON.stringify(reviewInfo));
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          alert("review submitted");
        }

        if (data.status === "failed") {
          alert("failed to submit review");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleClick = (event) => {
    event.preventDefault();
    const reviewInfo = { review };
    createReview(reviewInfo);
    //console.log("reviewinfo", reviewInfo);
  };
  return (
    <>
      <form>
        <h2>Book Title: {id}</h2>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">
            Write your review here:
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          <br />
          <button onClick={handleClick}>Submit Review</button>
          <p>
            Note: If you already have an existing review, this will overwrite
            your existing review. <br />
            If you want to edit your review for this book, please go to the
            'Reviews' tab in the header
          </p>
        </div>
      </form>
    </>
  );
};

export default Reviewbook;
