import React, { useState, useEffect } from "react";
import cross from "../images/close.png";
import SaveToLib from "./SaveToLib";
import ReviewButton from "./ReviewButton";
import { useNavigate, useParams } from "react-router-dom";

const API_KEY = process.env.REACT_APP_APIKEY;

// ({ bookItem, show, onClose });

const Modal = () => {
  const { id } = useParams();
  console.log("id", id);
  // const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [load, setLoad] = useState(false); //not coded yet

  const navigate = useNavigate();

  const googlebooksURL = `https://www.googleapis.com/books/v1/volumes?q='+${id}+'&orderBy=relevance&key=${API_KEY}+&maxResults=40`;

  useEffect(() => {
    const showModal = () => {
      fetch(googlebooksURL)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.items);
          setLoad(true);
        })
        .catch((error) => {
          console.log("There is an error");
        });
    };
    showModal();
  }, []);

  console.log("searchitems", searchResults);
  //console.log(searchResults[0].volumeInfo.title);

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          {/* <p>TESTING</p>
          {load ? <p>{searchResults[0].volumeInfo.title}</p> : <p>NO</p>} */}
          {load ? (
            <>
              <button id="close" onClick={handleClick}>
                <img src={cross} alt="cross" />
              </button>
              <div className="inner-box">
                <img
                  src={searchResults[0].volumeInfo.imageLinks.thumbnail}
                  alt=""
                />
                <div className="info">
                  <h1>{searchResults[0].volumeInfo.title}</h1>
                  <h3>{searchResults[0].volumeInfo.authors}</h3>
                  <h4>{searchResults[0].volumeInfo.publisher}</h4>
                  <h4>{searchResults[0].volumeInfo.publishedDate}</h4>
                  <br />
                </div>
              </div>
              <h4 className="description">
                {searchResults[0].volumeInfo.description}
              </h4>
              <SaveToLib
                bookTitle={searchResults[0].volumeInfo.title}
                bookAuthor={searchResults[0].volumeInfo.authors}
                thumbnail={searchResults[0].volumeInfo.imageLinks.thumbnail}
              />
              <ReviewButton
                bookTitle={searchResults[0].volumeInfo.title}
                bookAuthor={searchResults[0].volumeInfo.authors}
                thumbnail={searchResults[0].volumeInfo.imageLinks.thumbnail}
              />{" "}
            </>
          ) : (
            <p>LOADING</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
