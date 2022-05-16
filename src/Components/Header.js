import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="p-2">
            <p class="nav-link" onClick={() => navigate(`/login`)}>
              Login
            </p>
          </li>
          <li class="p-2">
            <p class="nav-link" onClick={() => navigate(`/home`)}>
              Home
            </p>
          </li>
          <li class="p-2">
            <p class="nav-link" onClick={() => navigate(`/library`)}>
              My Library
            </p>
          </li>
          <li class="p-2">
            <p class="nav-link" onClick={() => navigate(`/about`)}>
              About
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
