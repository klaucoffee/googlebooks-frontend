import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="p-2">
            <p className="nav-link" onClick={() => navigate(`/login`)}>
              Login
            </p>
          </li>

          <li className="p-2">
            <p className="nav-link" onClick={() => navigate(`/home`)}>
              Home
            </p>
          </li>
          <li className="p-2">
            <p className="nav-link" onClick={() => navigate(`/library`)}>
              My Library
            </p>
          </li>
          <li className="p-2">
            <p className="nav-link" onClick={() => navigate(`/review`)}>
              Reviews
            </p>
          </li>
          <li className="p-2">
            <p className="nav-link" onClick={() => navigate(`/about`)}>
              About
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
