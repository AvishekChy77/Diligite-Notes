"use client";
import React, { useState } from "react";
import { LuUndo2 } from "react-icons/lu";
import { LuRedo2 } from "react-icons/lu";
const MakeCard = () => {
  const [isTrue, setValue] = useState(false);
  const [text, setText] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
    setHistory([...history.slice(0, historyIndex + 1), newText]);
    setHistoryIndex(historyIndex + 1);
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "z" && event.ctrlKey) {
      handleUndo();
    } else if (event.key === "y" && event.ctrlKey) {
      handleRedo();
    }
  };

  const handleCancel = () => {
    setText("");
    setHistory([]);
    setHistoryIndex(-1);
    setValue(false);
  };

  console.log(isTrue);
  return (
    <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-md shadow-slate-400 bg-white p-4">
      <textarea
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onClick={() => setValue(true)}
        className="w-full h-14 rounded-lg p-2 focus:outline-none resize-none"
        placeholder={isTrue ? "Title" : "Take a note..."}
      ></textarea>
      <textarea
        className={`w-full h-14 rounded-lg p-2 focus:outline-none resize-none ${
          isTrue ? "visible" : "hidden"
        }`}
        placeholder="Take a note..."
      ></textarea>
      <div className="flex items-center justify-end mt-2 gap-3">
        <LuRedo2 onClick={handleRedo} size={24} />
        <LuUndo2 onClick={handleUndo} size={24} />
        <button className="bg-gray-100 px-2 rounded-md">Save</button>
        <button onClick={handleCancel} className="bg-gray-100 px-2 rounded-md">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MakeCard;
