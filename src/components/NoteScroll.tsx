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
  return (
    <>
      <ScrollPage key={props.id} className="justify-center align-middle">
        <Animator
          className="w-screen "
          animation={batch(Sticky(), MoveIn(0, 500), FadeOut(1, 0))}>
          <div className="bg-white text-black p-4 rounded-xl w-10/12 h-48">
            <div>{props.id}</div>
            <h1 className=" text-xl">{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.content}</p>
            <p>{props.created_at}</p>
          </div>
        </Animator>
      </ScrollPage>
    </>
  );
}
