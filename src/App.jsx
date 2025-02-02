import { useState } from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/Home";
//component
import NavBar from "./components/navbar";
//css
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
