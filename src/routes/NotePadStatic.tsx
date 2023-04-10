import { api } from "../api";
import { useState } from "react";
import { NoteStatic } from "../components/NoteStatic";

export function NotePadStatic() {
  const [noteData, setNoteData] = useState([]);
  api
    .get("/notepads")
    .then((res) => {
      const noteArr = res.data;
      const mapped = noteArr.slice(0, 4).map((item) => {
        return (
          <NoteStatic
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

  return (
    <>
      <div className="flex flex-col items-center">{...noteData}</div>
    </>
  );
}
