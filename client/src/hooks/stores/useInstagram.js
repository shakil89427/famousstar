import { create } from "zustand";

const useInstagram = create((set) => ({
  data: null,
  loading: false,
  getData: (url) => {
    set({ loading: true });
    setTimeout(() => {
      set({ data: {}, loading: false });
    }, 3000);
  },
}));

export default useInstagram;
