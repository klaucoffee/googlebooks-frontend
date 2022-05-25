import React, { useState } from "react";
import Modal from "./Modal";
import { useNavigate, useParams } from "react-router-dom";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState("");
  const [reveal, setReveal] = useState(false);
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
                  // setShow(true);
                  setBookItem(item);
                  setReveal(true);
                  navigate(`/home/${item.id}`);
                }}
              >
                <img src={thumbnail} alt="book cover sample" />
                <div className="bottom">
                  <h3 className="title">{bookTitle}</h3>
                  <h3 className="author">{bookAuthor}</h3>
                </div>
              </div>
              {/* { reveal ? <Modal
                // show={show}
                bookItem={bookItem}
                onClose={() => setShow(false)}
              /> : <p>loading</p>} */}
            </>
          );
        }
      })}
    </>
  );
};

export default Card;
