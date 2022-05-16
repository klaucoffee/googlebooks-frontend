import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmpw, setConfirmpw] = useState("");

  ////////////CREATE USER////////////
  //   const createUser = (userInfo) => {
  //     fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(userInfo),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.status === "success") {
  //           alert("new account created - proceed to sign in");
  //           navigate("/daybits/home");
  //         }
  //         if (data.error) {
  //           setError(data.error);
  //         }
  //         if (data.status === "failed") {
  //           alert("username taken. please choose another username");
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  const handleClick = (event) => {
    event.preventDefault();
    console.log("clicked");
    if (password !== confirmpw) {
      alert("passwords do not match");
    } else {
      const userInfo = { email, password }; //backend
      console.log(userInfo);
      //createUser(userInfo); //LINK to backend
    }
  };

  //   console.log("email", email);
  //   console.log("pw", password);
  //   console.log("cfmpw", confirmpw);

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
            >
              Register
            </p>
          </li>
        </ul>
        <div class="form-outline mb-4">
          <input
            type="email"
            id="registerEmail"
            class="form-control"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label class="form-label" for="registerEmail">
            Email
          </label>
        </div>
        <div class="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            class="form-control"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label class="form-label" for="registerPassword">
            Password
          </label>
        </div>
        <div class="form-outline mb-4">
          <input
            type="password"
            id="registerRepeatPassword"
            class="form-control"
            onChange={(e) => {
              setConfirmpw(e.target.value);
            }}
          />
          <label class="form-label" for="registerRepeatPassword">
            Repeat password
          </label>
        </div>
        <button
          style={{ marginBottom: "10px", marginTop: "10px" }}
          type="submit"
          class="btn btn-primary btn-lg btn-block"
          onClick={handleClick}
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
