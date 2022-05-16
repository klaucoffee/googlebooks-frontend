import React from "react";
import bookcoversample from "../images/bookcover_sample.jpg";
import cross from "../images/close.png";
import heart from "../images/heart.png";
import edittext from "../images/edit-text.png";
import Library from "./Library";

const Modal = ({ bookItem, show, onClose }) => {
  //ADD BOOK ITEM TO DATABASE
  const handleLike = () => {
    console.log("like");
  };

  const handleNotes = () => {
    console.log("edit");
  };

  if (!show) {
    return null;
  }
  let thumbnail =
    bookItem.volumeInfo.imageLinks &&
    bookItem.volumeInfo.imageLinks.smallThumbnail;

  let bookTitle = bookItem.volumeInfo.title;

  let bookAuthor = bookItem.volumeInfo.authors;

  let bookPublisher = bookItem.volumeInfo.publisher;

  let bookPublisherYear = bookItem.volumeInfo.publishedDate;

  let bookDescription = bookItem.volumeInfo.description;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button id="close" onClick={onClose}>
            <img src={cross} alt="cross" />
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{bookTitle}</h1>
              <h3>{bookAuthor}</h3>
              <h4>{bookPublisher}</h4>
              <h4>{bookPublisherYear}</h4>
              <br />
            </div>
          </div>
          <h4 className="description">{bookDescription}</h4>
          <div className="iconbtns">
            <button id="heart" style={{ color: "tomato" }} onClick={handleLike}>
              <img src={heart} alt="heart" />
            </button>
            <button
              id="writing"
              style={{ color: "#bcd2e8" }}
              onClick={handleNotes}
            >
              <img src={edittext} alt="edittext" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
