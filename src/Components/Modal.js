import React from "react";
import cross from "../images/close.png";
import SaveToLib from "./SaveToLib";
import Review from "./Review";

const Modal = ({ bookItem, show, onClose }) => {
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
          <SaveToLib
            bookTitle={bookTitle}
            bookAuthor={bookAuthor}
            thumbnail={bookItem.volumeInfo.imageLinks.thumbnail}
          />
          <Review
            bookTitle={bookTitle}
            bookAuthor={bookAuthor}
            thumbnail={bookItem.volumeInfo.imageLinks.thumbnail}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
