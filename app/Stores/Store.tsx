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

//sidebar-navbar connection
export const useToggleStore = create<ToggleStore>((set) => ({
  sidebarToggle: false,
  setSidebarToggle: () => {
    set((state) => ({ sidebarToggle: !state.sidebarToggle }));
  },
}));

// user-profile dropdown
export const useDropdownStore = create<DropdownStore>((set) => ({
  dropdown: false,
  setDropdown: () => {
    set((state) => ({ dropdown: !state.dropdown }));
  },
}));

// list/grid toggle
export const useCardStyle = create<CardStyle>((set) => ({
  isList: false,
  setStyle: () => {
    set((state) => ({ isList: !state.isList }));
  },
}));
