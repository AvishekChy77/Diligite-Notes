import { create } from "zustand";

export interface ToggleStore {
  sidebarToggle: boolean;
  setSidebarToggle: () => void;
}
export interface DropdownStore {
  dropdown: boolean;
  setDropdown: () => void;
}

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
