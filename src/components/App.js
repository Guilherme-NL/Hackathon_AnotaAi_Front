import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { UserDataProvider } from "../contexts/UserDataContext";

import Wellcome from "./Wellcome";
import Singin from "./Singin";
import Singup from "./Singup";
import Home from "./Home";
import Note from "./Note";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <UserDataProvider>
          <Routes>
            <Route path="/" element={<Wellcome />} />
            <Route path="/singup" element={<Singup />} />
            <Route path="/singin" element={<Singin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/note" element={<Note />} />
          </Routes>
        </UserDataProvider>
      </BrowserRouter>
    </>
  );
}
