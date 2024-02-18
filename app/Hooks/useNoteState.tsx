import React, { useState } from "react";
interface Note {
  id: number;
  title: string;
  description: string;
}

const useNoteState = () => {
  const [isTrue, setValue] = useState(false);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [notes, setNotes] = useState<Note[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
    setHistory([...history.slice(0, historyIndex + 1), newText]);
    setHistoryIndex(historyIndex + 1);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText2(newText);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setText(history[historyIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setText(history[historyIndex + 1]);
    }
  };

  const handleCancel = (e: any): void => {
    e.preventDefault();
    setText("");
    setText2("");
    setHistory([]);
    setHistoryIndex(-1);
    setValue(false);
  };

  const handleSaveNote = (e: any): void => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const strData = localStorage.getItem("notes");
    const length = JSON.parse(strData ? strData : "{}").length || 0;
    const NewNote = {
      id: length + 1,
      title,
      description,
    };
    console.log(NewNote);
    const updatedNotes = [...notes, NewNote];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setText("");
    setText2("");
    setValue(false);
  };

  return {
    isTrue,
    setValue,
    text,
    text2,
    setText,
    handleChange,
    handleChange2,
    handleRedo,
    handleUndo,
    handleSaveNote,
    handleCancel,
  };
};

export default useNoteState;
