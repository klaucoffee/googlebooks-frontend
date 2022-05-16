import React from "react";
import bookcoversample from "../images/bookcover_sample.jpg";

const Modal = () => {
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close">
            <i class="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img src={bookcoversample} alt="bookcoversample" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
