import { ScrollContainer } from "react-scroll-motion";
import { NoteScroll } from "../components/NoteScroll";
import { api } from "../api";
import { useState, useEffect } from "react";
import { Breadcrumb } from "../components/Breadcrumb";

export function NotePadAnim() {
  const [noteData, setNoteData] = useState([]);

  useEffect(() => {
    api
      .get("/notepads")
      .then((res) => {
        const noteArr = res.data;
        const mapped = noteArr.map(
          (item: {
            id: number;
            title: string;
            subtitle: string;
            created_at: string;
            content: string;
          }) => {
            return (
              <NoteScroll
                key={item.id}
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                created_at={item.created_at}
                content={item.content}
              />
            );
          }
        );
        setNoteData(mapped);
      })
      .catch((err) => console.log(err));
  }, []);
  const breadcrumbLinks = [
    { title: "Home > ", link: "/" },
    { title: " notepads", link: "/notepads" },
  ];
  return (
    <div>
      <Breadcrumb links={breadcrumbLinks} />
      <ScrollContainer className=" items-center w-screen">
        {...noteData}
      </ScrollContainer>
    </div>
  );
}
