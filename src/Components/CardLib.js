import React, { useState } from "react";
import "./style.css";

const CardLib = ({ bookData }) => {
  const bookDataArr = Array.from(bookData);

  return (
    <>
      {bookDataArr.map((item) => {
        let thumbnail = item.thumbnail;

        let bookTitle = item.bookTitle;

        let bookAuthor = item.bookAuthor;
        if (thumbnail !== undefined) {
          return (
            <>
              <div className="card">
                <img src={thumbnail} alt="book cover sample" />
                <div className="bottom">
                  <h3 className="title">{bookTitle}</h3>
                  <h3 className="author">{bookAuthor}</h3>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default CardLib;
