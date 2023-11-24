import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: "",
  reducers: {
    inputChange: (state, action) => {
      state = action.payload;
      return state;
    },
    sumbit: (state) => {
      alert("Se esta enviando " + state);
      return state;
    },
  },
});

export default formSlice.reducer;
export const { inputChange, sumbit } = formSlice.actions;
