import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import {UserDataProvider}  from "../contexts/UserDataContext.js";
import "../styles/reset.css";
import "../styles/style.css";

import Singin from "./Singin";
import Singup from "./Singup";
import Home from "./Home";
import Note from "./Note";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <UserDataProvider.Provider value="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/singup" element={<Singup />} />
              <Route path="/singin" element={<Singin />} />
            
              <Route path="/note" element={<Note />} />
            </Routes>  
          </UserDataProvider.Provider>
      </BrowserRouter>
     
    </>
  );
}
