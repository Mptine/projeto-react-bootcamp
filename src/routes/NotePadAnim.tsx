import { ScrollContainer } from "react-scroll-motion";
import { NoteScroll } from "../components/NoteScroll";
import { api } from "../api";
import { useState } from "react";

export function NotePadAnim() {
  const [noteData, setNoteData] = useState([]);
  api
    .get("/notepads")
    .then((res) => {
      const noteArr = res.data;
      const mapped = noteArr.map((item) => {
        return (
          <NoteScroll
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            created_at={item.created_at}
            content={item.content}
          />
        );
      });
      setNoteData(mapped);
    })
    .catch((err) => console.log(err));

  return <ScrollContainer snap="mandatory">{...noteData}</ScrollContainer>;
}
