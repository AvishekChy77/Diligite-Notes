import { create } from "zustand";

export interface Note {
  id: number;
  title: string;
  description: string;
}

export interface Store {
  collection: Note[];
  setCollection: (e: React.ChangeEvent<HTMLFormElement>) => void;
  isTrue: boolean;
  text: string;
  text2: string;
  history: string[];
  historyIndex: number;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleChange2: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleUndo: () => void;
  handleRedo: () => void;
  handleCancel: (e: any) => void;
  handleTruth: (e: any) => void;
}

export const useNoteStore = create<Store>((set) => ({
  collection: JSON.parse(localStorage.getItem("notes") as string) || [],
  isTrue: false,
  text: "",
  text2: "",
  history: [],
  historyIndex: -1,

  handleChange: (event) => {
    const newText = event.target.value;
    set((state) => ({
      ...state,
      text: newText,
      history: [...state.history.slice(0, state.historyIndex + 1), newText],
      historyIndex: state.historyIndex + 1,
    }));
  },

  handleChange2: (event) => {
    const newText = event.target.value;
    set((state) => ({ ...state, text2: newText }));
  },

  handleUndo: () => {
    set((state) => {
      if (state.historyIndex > 0) {
        return {
          ...state,
          historyIndex: state.historyIndex - 1,
          text: state.history[state.historyIndex - 1],
        };
      }
      return state;
    });
  },

  handleRedo: () => {
    set((state) => {
      if (state.historyIndex < state.history.length - 1) {
        return {
          ...state,
          historyIndex: state.historyIndex + 1,
          text: state.history[state.historyIndex + 1],
        };
      }
      return state;
    });
  },

  handleCancel: () => {
    set((state) => ({
      ...state,
      text: "",
      text2: "",
      history: [],
      historyIndex: -1,
      isTrue: false,
    }));
  },

  handleTruth: (value: boolean) => {
    set((state) => ({
      ...state,
      isTrue: value,
    }));
  },

  setCollection: (e) =>
    set((state) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const newNote: Note = {
        id: state.collection.length + 1,
        title: form.title.value,
        description: form.description.value,
      };

      localStorage.setItem(
        "notes",
        JSON.stringify([...state.collection, newNote])
      );
      return {
        ...state,
        collection: [...state.collection, newNote],
        text: "",
        text2: "",
        isTrue: false,
      };
    }),
}));
