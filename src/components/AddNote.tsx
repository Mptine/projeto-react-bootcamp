import { api } from "../api";
import { InputField } from "./InputField";
import { InputArea } from "./InputArea";
import { useState } from "react";

export function AddNote() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [text, setText] = useState("");
  return (
    <>
      <div className="flex flex-row gap-6">
        <InputField placeholder="Title" value={title} />
        <InputField placeholder="Subtitle" value={subtitle} />
      </div>
      <div>
        <InputArea placeholder="Type your note here." value={text} />
      </div>
    </>
  );
}
