import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import { UserDataProvider } from "../contexts/UserDataContext.js";
import "../styles/reset.css";
import "../styles/style.css";

import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
import Notes from "./Notes";
import Note from "./Note"
import ProtectedRoute from "./ProtectedRoute";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <UserDataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/notes" element={<Notes />}/>
            <Route path="/notes/:id" element={<Note />} /> 
          </Routes>
        </UserDataProvider>
      </BrowserRouter>
    </>
  );
}
