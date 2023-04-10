import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { NoteScroll } from "./components/NoteScroll";
import { api } from "./api";
import { NotePadAnim } from "./routes/NotePadAnim";
import { AppHeader } from "./components/AppHeader";
import { AppFooter } from "./components/AppFooter";
import { EditNotepad } from "./components/EditNotepad";
import { About } from "./routes/About";
import { Breadcrumb } from "./components/Breadcrumb";

function App() {
  return (
    <div className=" w-screen h-full bg-[#272728]">
      <BrowserRouter>
        <AppHeader />
        <div className="flex h-full">
          <div className=" w-2/12 h-full"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notepads/" element={<NotePadAnim />} />
            <Route path="/notepads/:id/edit" element={<EditNotepad />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
