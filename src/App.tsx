import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Sticky,
  batch,
  Fade,
} from "react-scroll-motion";
import { NoteScroll } from "./components/NoteScroll";
import { api } from "./api";
import { NotePadAnim } from "./routes/NotePadAnim";
import { AppHeader } from "./components/AppHeader";

function App() {
  return (
    <div className=" w-screen">
      <BrowserRouter>
        <AppHeader />
        <div className="flex">
          <div className=" w-2/12"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notepads" element={<NotePadAnim />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
