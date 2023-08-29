import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface AllTextSlice {
  value: TextData[];
}

const initialState: AllTextSlice = { value: [] };

const allTextSlice = createSlice({
  name: "allText",
  initialState,
  reducers: {
    setAllText: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setAllText } = allTextSlice.actions;
export const allTextSelector = (state: RootState) => state.allText.value;

export default allTextSlice.reducer;
