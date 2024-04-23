import { create } from "zustand";

// Slice for the active Index of the navigation Section
const createActiveIndexSlice = (set) => {
  return {
    activeIndex: 0,
    changeActiveIndex: (newIndex) =>
      set(() => {
        return {
          activeIndex: newIndex,
        };
      }),
  };
};


// Creating a Zustand store with all slices
const useStore = create((...a) => ({
  ...createActiveIndexSlice(...a),
}));

export default useStore;
