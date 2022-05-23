import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import urlcat from "urlcat";

const Reviewbook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [review, setReview] = useState("");
  const [editReview, setEditReview] = useState("");
  const [load, setLoad] = useState(false);
  const BACKEND = process.env.REACT_APP_BACKEND;

  ////////////CREATE URL////////////
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

  ////////////FIND REVIEW IF IT EXISTS//////////

  //get all reviews
  useEffect(() => {
    const getReview = () => {
      fetch(urlcat(BACKEND, "/review"), {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((response) => response.json())
        .then((data) => {
          setEditReview(data);
          setLoad(true);
        })
        .catch((error) => alert("error"));
    };
    getReview();
  }, []);

  //check if all reviews match this title
  //see if there is a review for this particular title
  let editReviewBook;

  if (load) {
    for (let i = 0; i < editReview.length; i++) {
      if (
        editReview[i].bookTitle === id &&
        typeof editReview[i].review === "string"
      ) {
        // console.log(editReview[i].review);
        editReviewBook = editReview[i].review;
        //setEditReviewBook(editReview[i].review);
      }
    }
  }

  console.log("editreviewbook", editReviewBook);

  console.log("load", load);

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

  const handleChange = (value) => {
    setLoad(false);
  };
  const handleClick = (event) => {
    event.preventDefault();
    const reviewInfo = { review };
    createReview(reviewInfo);
    navigate("/review");
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
          {load ? (
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              value={editReviewBook}
              onChange={handleChange}
            ></textarea>
          ) : (
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          )}
          <br />
          <button onClick={handleClick}>Submit</button>
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
