import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cast: [],
};

export const castSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getAllCast: (state, action) => {
      state.cast = [...action.payload];
    },
  },
});

export const { getAllCast } = castSlice.actions;

export default castSlice.reducer;
