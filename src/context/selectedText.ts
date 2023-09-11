import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface SelectedTextSlice {
  value?: TextNode;
}

const initialState: SelectedTextSlice = {};

const selectedTextSlice = createSlice({
  name: "selectedText",
  initialState,
  reducers: {
    setSelectedText: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setSelectedText } = selectedTextSlice.actions;
export const selectedTextSelector = (state: RootState) =>
  state.selectedText.value;

export default selectedTextSlice.reducer;
