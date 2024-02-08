import { create } from "zustand";

export interface Store {
  sidebarToggle: boolean;
  setSidebarToggle: () => void;
}

export const useToggleStore = create<Store>((set) => ({
  sidebarToggle: false,
  setSidebarToggle: () => {
    set((state) => ({ sidebarToggle: !state.sidebarToggle }));
  },
}));
