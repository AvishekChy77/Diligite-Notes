"use client";
import { useNoteStore } from "@/app/Stores/NoteStore";
import { LuRedo2, LuUndo2 } from "react-icons/lu";

const CreateNote = () => {
  const text = useNoteStore((state) => state.text);
  const text2 = useNoteStore((state) => state.text2);
  const handleChange = useNoteStore((state) => state.handleChange);
  const handleChange2 = useNoteStore((state) => state.handleChange2);
  const isTrue = useNoteStore((state) => state.isTrue);
  const handleUndo = useNoteStore((state) => state.handleUndo);
  const handleCancel = useNoteStore((state) => state.handleCancel);
  const handleRedo = useNoteStore((state) => state.handleRedo);
  const handleTruth = useNoteStore((state) => state.handleTruth);
  const setCollection = useNoteStore((state) => state.setCollection);

  return (
    <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-md shadow-slate-400 bg-white p-4">
      <form onSubmit={setCollection} action="">
        <textarea
          required
          name="title"
          value={text}
          onChange={handleChange}
          onClick={() => handleTruth(true)}
          className="w-full font-medium h-14 rounded-lg p-2 focus:outline-none resize-none text-black"
          placeholder={isTrue ? "Title" : "Take a note..."}
        ></textarea>
        <textarea
          required
          name="description"
          value={text2}
          onChange={handleChange2}
          onClick={() => handleTruth(true)}
          className={`w-full h-14 rounded-lg p-2 focus:outline-none resize-none ${
            isTrue ? "visible" : "hidden"
          } text-black`}
          placeholder="Take a note..."
        ></textarea>
        <div className="flex items-center justify-end mt-2 gap-3">
          <LuRedo2 onClick={handleRedo} color="grey" size={24} />
          <LuUndo2 onClick={handleUndo} color="grey" size={24} />
          <button
            type="submit"
            className="bg-black font-medium text-white px-2 rounded-md"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="bg-black font-medium text-white px-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
