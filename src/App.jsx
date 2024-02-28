import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import Main from "./pages/Main";
import List from "./pages/List";

function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book/list" element={<List/>} />
    </Routes>
    </>
  );
}

export default App;
