import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Sticky,
  batch,
  Fade,
  FadeOut,
  Move,
  MoveIn,
} from "react-scroll-motion";

type NoteScrollProps = {
  id: number;
  title: string;
  subtitle: string;
  created_at: string;
  content: string;
};

export function NoteScroll(props: NoteScrollProps) {
  const createdDate = new Date(props.created_at);
  const now = new Date();
  const elapsedMs = now.getTime() - createdDate.getTime();
  const elapsedSeconds = Math.floor(elapsedMs / 1000);

  let elapsed;
  if (elapsedSeconds < 60) {
    elapsed = `${elapsedSeconds} seconds ago`;
  } else if (elapsedSeconds < 3600) {
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    elapsed = `${elapsedMinutes} minutes ago`;
  } else if (elapsedSeconds < 86400) {
    const elapsedHours = Math.floor(elapsedSeconds / 3600);
    elapsed = `${elapsedHours} hours ago`;
  } else {
    const elapsedDays = Math.floor(elapsedSeconds / 86400);
    elapsed = `${elapsedDays} days ago`;
  }
  return (
    <>
      <ScrollPage key={props.id} className="justify-center items-center">
        <Animator
          className="w-10/12"
          animation={batch(Sticky(), MoveIn(0, 500), FadeOut(1, 0))}>
          <div className=" text-white p-4 rounded-xl h-48 text-center">
            <div>id:{props.id}</div>
            <h1 className=" text-4xl">{props.title}</h1>
            <h2 className=" text-2xl">{props.subtitle}</h2>
            <p className=" text-2xl mt-10 text-red-400">{props.content}</p>
            <p className=" text-lg text-red-400">{elapsed}</p>
          </div>
        </Animator>
      </ScrollPage>
    </>
  );
}
