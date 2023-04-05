import { api } from "../api";
import { InputField } from "./InputField";
import { InputArea } from "./InputArea";
export function AddNote() {
  return (
    <>
      <div className="flex flex-row gap-6">
        <InputField placeholder="Title" />
        <InputField placeholder="Subtitle" />
      </div>
      <div className="h-96 w-full">
        <InputArea placeholder="Type your note here." />
      </div>
    </>
  );
}
