import React from "react";
import bookcoversample from "../images/bookcover_sample.jpg";

const Card = () => {
  return (
    <div>
      <div className="card">
        <img src={bookcoversample} alt="book cover sample" />
        <div className="bottom">
          <h3 className="author">Author</h3>
          <h3 className="title">Title</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
