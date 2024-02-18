import { create } from "zustand";

export interface ToggleStore {
  sidebarToggle: boolean;
  setSidebarToggle: () => void;
}
export interface DropdownStore {
  dropdown: boolean;
  setDropdown: () => void;
}
export interface CardStyle {
  isList: boolean;
  setStyle: () => void;
}
// interface Note {
//   id: number;
//   title: string;
//   description: string;
// }
// export interface StoreNote {
//   notes: Note[];
//   handleSaveNote: (e: any) => void;
// }

export const useToggleStore = create<ToggleStore>((set) => ({
  sidebarToggle: false,
  setSidebarToggle: () => {
    set((state) => ({ sidebarToggle: !state.sidebarToggle }));
  },
}));

export const useDropdownStore = create<DropdownStore>((set) => ({
  dropdown: false,
  setDropdown: () => {
    set((state) => ({ dropdown: !state.dropdown }));
  },
}));

export const useCardStyle = create<CardStyle>((set) => ({
  isList: true,
  setStyle: () => {
    set((state) => ({ isList: !state.isList }));
  },
}));

// export const useStoreNote = create<StoreNote>((set) => ({
//   notes: [],
//   handleSaveNote: (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const title = form.title.value;
//     const description = form.description.value;
//     const strData = localStorage.getItem("notes");
//     const length = JSON.parse(strData ? strData : "{}").length || 0;
//     const NewNote = {
//       id: length + 1,
//       title,
//       description,
//     };
//     set((state) => ({notes:[...state.notes, NewNote]}));
//   },
// }));
