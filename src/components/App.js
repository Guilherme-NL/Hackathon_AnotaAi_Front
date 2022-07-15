import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { UserDataProvider } from "../contexts/UserDataContext";

import Wellcome from "./Wellcome";
import Singin from "./Singin";
import Singup from "./Singup";
import Home from "./Home";
import Note from "./Note";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <UserDataProvider>
          <Routes>
            <Route path="/" element={<Wellcome />} />
            <Route path="/singup" element={<Singup />} />
            <Route path="/singin" element={<Singin />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/note"
              element={
                <ProtectedRoute>
                  <Note />
                </ProtectedRoute>
              }
            />
          </Routes>
        </UserDataProvider>
      </BrowserRouter>
    </>
  );
}
