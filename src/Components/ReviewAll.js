import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import urlcat from "urlcat";

const BACKEND = process.env.REACT_APP_BACKEND;

const ReviewAll = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/review/:id"); //need to fill in ID
  };

  //   useEffect(() => {
  //     const getBookIDs = () => {
  //       fetch(urlcat(BACKEND, "/library"), {
  //         method: "GET",
  //         credentials: "include",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(),
  //       })
  //         .then((response) => response.json())
  //         .then((data) => {
  //           setBookData(data);
  //         })
  //         .catch((error) => alert("error"));
  //     };
  //     showLibrary();
  //   }, []);

  return (
    <div>
      <table class="table table-hover table-responsive-sm">
        <thead>
          <tr>
            <th scope="col">Book ID</th>
            <th scope="col">Title</th>
            <th scope="col">Review</th>
            <th scope="col">Reviewed on:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td onClick={handleClick}>BOOK TITLE</td>
            <td>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReviewAll;
