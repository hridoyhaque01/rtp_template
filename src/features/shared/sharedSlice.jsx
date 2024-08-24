import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePath: "",
  showSidebar: false,
  submenuOpen: {},
};

const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    setActivePath: (state, action) => {
      state.activePath = action.payload;
    },
    setShowSidebar: (state, action) => {
      state.showSidebar = action.payload;
    },
    setSubmenuOpen: (state, action) => {
      const menu = action?.payload;
      Object.keys(state.submenuOpen).forEach((key) => {
        if (state.submenuOpen[key] !== state.submenuOpen[menu]) {
          state.submenuOpen[key] = false;
        }
      });
      state.submenuOpen[menu] = !state.submenuOpen[menu];
    },
  },
});

export const { setActivePath, setSubmenuOpen, setShowSidebar } =
  sharedSlice.actions;
export default sharedSlice.reducer;
