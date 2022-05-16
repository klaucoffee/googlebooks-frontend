import React from "react";
import bookcoversample from "../images/bookcover_sample.jpg";

const Card = ({ book }) => {
  console.log("fromcards", book);
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;

        let bookTitle = item.volumeInfo.title;

        let bookAuthor = item.volumeInfo.authors;
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

export default Card;
