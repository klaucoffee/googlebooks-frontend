import React from "react";
import { useNavigate } from "react-router-dom";

const Editbutton = ({ bookTitle, bookReview }) => {
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate(`${bookTitle}`);
  };
  return (
    <>
      <button onClick={handleEditClick}>Edit</button>
    </>
  );
};

export default Editbutton;
