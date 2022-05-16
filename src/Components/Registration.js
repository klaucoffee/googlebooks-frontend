import React from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="loginform">
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li class="nav-item" role="presentation">
            <p
              class="nav-link"
              id="tab-login"
              data-mdb-toggle="pill"
              role="tab"
              aria-controls="pills-login"
              aria-selected="false"
              onClick={() => navigate(`/login`)}
            >
              Login
            </p>
          </li>
          <li class="nav-item" role="presentation">
            <p
              class="nav-link active"
              id="tab-register"
              data-mdb-toggle="pill"
              role="tab"
              aria-controls="pills-register"
              aria-selected="true"
              onClick={() => navigate(`/registration`)}
            >
              Register
            </p>
          </li>
        </ul>
        <div class="form-outline mb-4">
          <input type="email" id="registerEmail" class="form-control" />
          <label class="form-label" for="registerEmail">
            Email
          </label>
        </div>
        <div class="form-outline mb-4">
          <input type="password" id="registerPassword" class="form-control" />
          <label class="form-label" for="registerPassword">
            Password
          </label>
        </div>
        <div class="form-outline mb-4">
          <input
            type="password"
            id="registerRepeatPassword"
            class="form-control"
          />
          <label class="form-label" for="registerRepeatPassword">
            Repeat password
          </label>
        </div>
        <button
          style={{ marginBottom: "10px", marginTop: "10px" }}
          type="submit"
          class="btn btn-primary btn-lg btn-block"
        >
          Register
        </button>
        <div class="text-center">
          <p>
            Already a member?{" "}
            <span class="hoverNeed" onClick={() => navigate(`/login`)}>
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Registration;
