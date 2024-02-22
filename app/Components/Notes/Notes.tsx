"use client";

import { useEffect, useState } from "react";

import { useCardStyle } from "@/app/Stores/Store";
import NoteComponent from "./Note";
export type Note = {
  id: number;
  title: string;
  description: string;
};
type Notes = Note[] | null;

const AllNotes = () => {
  const [notes, setNotes] = useState<Notes>(null);
  const isList = useCardStyle((state) => state.isList);

  useEffect(() => {
    const strNotes = localStorage.getItem("notes");
    if (strNotes) {
      try {
        const storedNotes = JSON.parse(strNotes);
        setNotes(storedNotes);
      } catch (error) {
        console.error("Error parsing notes from localStorage:", error);
      }
    }
  }, []);

  return (
    <div
      className={`my-14 grid ${
        isList
          ? "grid-cols-1 max-w-3xl mx-auto"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      }  gap-5`}
    >
      {notes?.map((note: Note) => (
        <NoteComponent key={note.id} note={note} />
      ))}
    </div>
  );
};

export default AllNotes;
