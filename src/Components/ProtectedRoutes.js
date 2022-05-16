import React, { useState } from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import { useAtom } from "jotai";
import { loginAtom } from "../App";
import Library from "./Library";
import Main from "./Main";
import About from "./About";
import Login from "./Login";
import Registration from "./Registration";

const Protected = ({ children }) => {
  const [login, setLogin] = useAtom(loginAtom);
  if (login) {
    return children;
  } else {
    return (
      <p style={{ textAlign: "center", fontSize: "40px" }}>
        {" "}
        Please log in to view this page{" "}
      </p>
    );
  }
};

const ProtectedRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="home" element={<Main />} />
        <Route
          path="library"
          element={
            <Protected>
              <Library />
            </Protected>
          }
        />
        <Route
          path="about"
          element={
            <Protected>
              <About />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
};

export default ProtectedRoutes;
