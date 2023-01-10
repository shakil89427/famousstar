import { create } from "zustand";

const useUrlStore = create((set) => ({
  url: "",
  setUrl: (url) => set({ url }),
}));

export default useUrlStore;
