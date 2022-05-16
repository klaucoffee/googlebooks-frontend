import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import urlcat from "urlcat";
import { useAtom } from "jotai";
import { loginAtom } from "../App";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useAtom(loginAtom);
  const BACKEND = process.env.REACT_APP_BACKEND;
  const urlLogin = urlcat(BACKEND, "/login");
  const urlLogout = urlcat(BACKEND, "/logout");

  const checkUser = (userInfo) => {
    fetch(urlLogin, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setLogin(true); //check that the cookie.user exists? should be on index page
          alert("Login successful!");
          navigate("/home");
        }
      })
      .catch((error) => {
        alert(`Login failed. Please try again or register as a new user`);
      });
  };

  const handleClick = (event) => {
    event.preventDefault();
    const userInfo = { email, password }; //backend
    console.log(userInfo);
    checkUser(userInfo); //LINK to backend
  };

  const handleClickLogout = () => {
    fetch(urlLogout, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setLogin(false); //check that the cookie.user exists? should be on index page
          alert("Logout successful!");
          navigate("/home");
        }
      })
      .catch((error) => {
        alert(`Logout failed`);
      });
  };

  return (
    <>
      <div className="loginform">
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li class="nav-item" role="presentation">
            <p
              class="nav-link active"
              id="tab-login"
              data-mdb-toggle="pill"
              role="tab"
              aria-controls="pills-login"
              aria-selected="true"
            >
              Login
            </p>
          </li>
          <li class="nav-item" role="presentation">
            <p
              class="nav-link hoverNeed"
              id="tab-register"
              data-mdb-toggle="pill"
              role="tab"
              aria-controls="pills-register"
              aria-selected="false"
              onClick={() => navigate(`/registration`)}
            >
              Register
            </p>
          </li>
        </ul>

        <div class="tab-content">
          <div
            class="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form>
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="loginName"
                  class="form-control"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label class="form-label" for="loginName">
                  Email
                </label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  class="form-control"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label class="form-label" for="loginPassword">
                  Password
                </label>
              </div>

              <div class="d-flex justify-content-center">
                <a href="#!">Forgot password?</a>
              </div>

              <button
                style={{ marginBottom: "10px", marginTop: "10px" }}
                type="submit"
                class="btn btn-primary btn-lg btn-block"
                onClick={handleClick}
              >
                Sign in
              </button>

              <div class="text-center">
                <p>
                  Not a member?{" "}
                  <span
                    class="hoverNeed"
                    onClick={() => navigate(`/registration`)}
                  >
                    Register
                  </span>
                </p>
              </div>
              <button
                style={{ marginBottom: "10px", marginTop: "10px" }}
                type="submit"
                class="btn btn-primary btn-lg btn-block"
                onClick={handleClickLogout}
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
