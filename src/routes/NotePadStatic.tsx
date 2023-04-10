import { api } from "../api";
import { useState, useEffect } from "react";
import { NoteStatic } from "../components/NoteStatic";
import ClipLoader from "react-spinners/ClipLoader";

export function NotePadStatic() {
  const [noteData, setNoteData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get("/notepads")
      .then((res) => {
        const noteArr = res.data;
        const mapped = noteArr
          .slice(0, 10)
          .map(
            (item: {
              id: number;
              title: string;
              subtitle: string;
              created_at: string;
              content: string;
            }) => {
              return (
                <NoteStatic
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
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center mt-4 items-center">
        <ClipLoader
          color={"#EF4444"}
          loading={isLoading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <ul className="w-full">{noteData}</ul>
    </div>
  );
}
