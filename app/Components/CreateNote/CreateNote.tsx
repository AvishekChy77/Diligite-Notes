"use client";
import useNoteState from "@/app/Hooks/useNoteState";
import { LuRedo2, LuUndo2 } from "react-icons/lu";

const CreateNote = () => {
  const {
    text,
    text2,
    handleChange,
    handleChange2,
    isTrue,
    handleUndo,
    handleCancel,
    handleRedo,
    setValue,
    setText,
    handleSaveNote,
  } = useNoteState();

  return (
    <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-md shadow-slate-400 bg-white p-4">
      <form onSubmit={handleSaveNote} action="">
        <textarea
          required
          name="title"
          value={text}
          onChange={handleChange}
          onClick={() => setValue(true)}
          className="w-full font-medium h-14 rounded-lg p-2 focus:outline-none resize-none text-black"
          placeholder={isTrue ? "Title" : "Take a note..."}
        ></textarea>
        <textarea
          required
          name="description"
          value={text2}
          onChange={handleChange2}
          onClick={() => setValue(true)}
          className={`w-full h-14 rounded-lg p-2 focus:outline-none resize-none ${
            isTrue ? "visible" : "hidden"
          } text-black`}
          placeholder="Take a note..."
        ></textarea>
        <div className="flex items-center justify-end mt-2 gap-3">
          <LuRedo2 onClick={handleRedo} size={24} />
          <LuUndo2 onClick={handleUndo} size={24} />
          <button type="submit" className="bg-gray-100 px-2 rounded-md">
            Save
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-100 px-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
