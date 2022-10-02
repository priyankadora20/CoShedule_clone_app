import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../components/landing/Main";

import Homepage from "../components/HomePage/Homepage";

import EditProject from "../components/calender/EditProject";
import { FirstPage } from "../components/FirstPage/FirstPage";
import { Welcome } from "../components/WelcomePage/Welcome";
export const LandingPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" />
        <Route path="/register" />
        <Route path="/home" element={<Homepage />} />
        <Route path="/calender"/>
        <Route path="newproject" />
        <Route path="editproject" element={<EditProject />} />
        <Route path="register-calendar" element={<FirstPage />} />
        <Route path="welcome" element={<Welcome/>} />
      </Routes>
    </div>
  );
};
