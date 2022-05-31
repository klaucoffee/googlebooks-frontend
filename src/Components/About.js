import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="containerAbout" style={{ fontSize: "large" }}>
        <h3>
          This webapp is for any self-confessed bookworms who need to keep track
          of their personal libraries and who need to stop buying duplicates of
          the same books
        </h3>
        <br />
        <a href="https://github.com/klaucoffee/googlebooks-frontend">
          FRONTEND: Github repo for this project
        </a>
        <a href="https://github.com/klaucoffee/googlebooks-backend">
          BACKEND: Github repo for this project
        </a>

        <a href="https://developers.google.com/books/docs/v1/using">
          Google Books API Source
        </a>

        <section class="mb-4">
          <h2 class="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>

          <p class="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div class="col-md-12 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="fas fa-map-marker-alt fa-2x"></i>
                <p>Singapore</p>
              </li>

              <li>
                <a href="mailto:krystlelau90@gmail.com?subject=Feedback">
                  <i class="fas fa-envelope mt-4 fa-2x"></i>
                  <p>krystlelau90@gmail.com</p>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
