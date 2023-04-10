import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { NoteScroll } from "./components/NoteScroll";
import { api } from "./api";
import { NotePadAnim } from "./routes/NotePadAnim";
import { AppHeader } from "./components/AppHeader";
import { AppFooter } from "./components/AppFooter";

function App() {
  return (
    <div className=" w-screen h-screen fixed top-0 bg-[#272728]">
      <BrowserRouter>
        <AppHeader />
        <div className="flex ">
          <div className=" w-2/12"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notepads" element={<NotePadAnim />} />
          </Routes>
        </div>
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
