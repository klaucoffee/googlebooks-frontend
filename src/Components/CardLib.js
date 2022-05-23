import React, { useState } from "react";
import Deletelibbutton from "./Deletelibbutton";
import "./style.css";

const CardLib = ({ bookData, setLoading }) => {
  const bookDataArr = Array.from(bookData);

  return (
    <>
      {bookDataArr.map((item, index) => {
        let thumbnail = item.thumbnail;

        let bookTitle = item.bookTitle;

        let bookAuthor = item.bookAuthor;
        if (thumbnail !== undefined) {
          return (
            <>
              <div className="card" key={index}>
                <Deletelibbutton
                  bookTitle={bookTitle}
                  setLoading={setLoading}
                />
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
