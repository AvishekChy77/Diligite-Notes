"use client";
import { useNoteStore } from "@/app/Stores/NoteStore";
import { useCardStyle } from "@/app/Stores/Store";
import NoteComponent from "./Note";
export type Note = {
  id: number;
  title: string;
  description: string;
};
type Notes = Note[] | null;

const AllNotes = () => {
  const isList = useCardStyle((state) => state.isList);
  const collection = useNoteStore((state) => state.collection);

  return (
    <div
      className={`my-14 grid ${
        isList
          ? "grid-cols-1 max-w-3xl mx-auto"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      }  gap-5`}
    >
      {collection?.map((note: Note) => (
        <NoteComponent key={note.id} note={note} />
      ))}
    </div>
  );
};

export default AllNotes;
