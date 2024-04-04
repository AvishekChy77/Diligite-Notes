import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

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

export const useNoteStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        collection: [],
        isTrue: false,
        text: '',
        text2: '',
        history: [],
        historyIndex: -1,

        // Handle value change in title field
        handleChange: (event) => {
          const newText = event.target.value;
          set((state) => ({
            ...state,
            text: newText,
            history: [...state.history.slice(0, state.historyIndex + 1), newText],
            historyIndex: state.historyIndex + 1,
          }));
        },

        // Handle value change in description field
        handleChange2: (event) => {
          const newText = event.target.value;
          set((state) => ({ ...state, text2: newText }));
        },

        // handle undo icon
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

        // handle Redo icon
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

        // handle cancel button
        handleCancel: () => {
          set((state) => ({
            ...state,
            text: '',
            text2: '',
            history: [],
            historyIndex: -1,
            isTrue: false,
          }));
        },

        // minimize the create note card
        handleTruth: (value: boolean) => {
          set((state) => ({
            ...state,
            isTrue: value,
          }));
        },

        // handle save button
        setCollection: (e) =>
          set((state) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const newNote: Note = {
              id: state.collection.length + 1,
              title: state.text,
              description: form.description.value,
            };
            return {
              ...state,
              collection: [...state.collection, newNote],
              text: '',
              text2: '',
              isTrue: false,
            };
          }),
      }),
      {
        name: 'notes',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({ collection: state.collection }),
      },
    ),
  ),
);
