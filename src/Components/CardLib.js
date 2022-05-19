import React, { useState } from "react";

const CardLib = ({ bookData }) => {
  const [bookItem, setBookItem] = useState("");
  console.log(bookData);
  return (
    <>
      {/* {bookData.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;

        let bookTitle = item.volumeInfo.title;

        let bookAuthor = item.volumeInfo.authors;
        if (thumbnail !== undefined) {
          return (
            <>
              <div
                className="card"
                onClick={() => {
                  setShow(true);
                  setBookItem(item);
                }}
              >
                <img src={thumbnail} alt="book cover sample" />
                <div className="bottom">
                  <h3 className="title">{bookTitle}</h3>
                  <h3 className="author">{bookAuthor}</h3>
                </div>
              </div>
             
            </>
          );
        }
      })} */}
    </>
  );
};

export default CardLib;
