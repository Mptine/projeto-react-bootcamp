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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notepads" element={<NotePadAnim />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
