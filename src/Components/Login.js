import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
              onClick={() => navigate(`/login`)}
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
                <input type="email" id="loginName" class="form-control" />
                <label class="form-label" for="loginName">
                  Email
                </label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  class="form-control"
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
