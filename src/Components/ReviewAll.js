import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import urlcat from "urlcat";
import "./style.css";
import Editbutton from "./Editbutton";
import Deletebutton from "./Deletebutton";

const BACKEND = process.env.REACT_APP_BACKEND;

const ReviewAll = () => {
  const navigate = useNavigate();
  const [reviewAll, setReviewAll] = useState("");
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(false);
  const [searchResults, setSearchResults] = useState("");

  const { id } = useParams();

  //GET ALL REVIEWS FOR THIS USER
  useEffect(() => {
    const getAllReviews = () => {
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
          setReviewAll(data);
          setLoad(true);
        })
        .catch((error) => alert("error"));
    };
    getAllReviews();
  }, [reviewAll]);

  //console.log("reviewall", reviewAll);

  //SEARCH within the reviews
  const searchLib = () => {
    if (search.length === 1) {
      ///emptied search
      setFilter(false);
    } else if (search.length > 0) {
      const filterList = reviewAll.filter((i) => {
        //console.log("i", i.bookTitle.toLowerCase().toLowerCase());
        if (typeof i.review === "string") {
          return i.review.toLowerCase().includes(search.toLowerCase());
        }
      });

      setSearchResults(filterList);
      setFilter(true);
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
    searchLib();
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search your reviews"
          value={search}
          onChange={handleChange}
        />
        <button>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <table class="table table-hover table-responsive-sm">
        <thead>
          <tr>
            <th scope="col">S/N</th>
            <th scope="col">Book Title</th>
            <th scope="col">Reviewed on:</th>
            <th scope="col">Review</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {filter ? (
            <>
              {searchResults.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{item.bookTitle}</td>
                    <td>{item.createdOn}</td>
                    <td>{item.review}</td>
                    <td>
                      <Editbutton
                        bookTitle={item.bookTitle}
                        bookReview={item.review}
                      />
                    </td>
                    <td>
                      <Deletebutton bookTitle={item.bookTitle} />
                    </td>
                  </tr>
                );
              })}
            </>
          ) : load ? (
            <>
              {reviewAll.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{item.bookTitle}</td>
                    <td>{item.createdOn}</td>
                    <td>{item.review}</td>
                    <td>
                      <Editbutton
                        bookTitle={item.bookTitle}
                        bookReview={item.review}
                      />
                    </td>
                    <td>
                      <Deletebutton bookTitle={item.bookTitle} />
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <tr>No Items</tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ReviewAll;
