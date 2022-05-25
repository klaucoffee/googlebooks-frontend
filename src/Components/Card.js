import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ book }) => {
  const [bookItem, setBookItem] = useState("");
  const navigate = useNavigate();
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
              <div
                className="card"
                onClick={() => {
                  setBookItem(item);
                  navigate(`/home/${item.id}`);
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
      })}
    </>
  );
};

export default Card;
