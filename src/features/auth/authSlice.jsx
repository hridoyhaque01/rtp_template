import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveAuthData: (state, action) => {
      state.auth = { ...state.auth, ...action?.payload };
      localStorage.setItem("netrosystems_admin", JSON.stringify(state.auth));
    },
    logout: (state) => {
      state.auth = {};
      localStorage.removeItem("netrosystems_admin");
    },
  },
});

export const { saveAuthData, logout } = authSlice.actions;
export default authSlice.reducer;
