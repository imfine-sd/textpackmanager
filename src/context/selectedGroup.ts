import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface SelectedGroupSlice {
  value?: TextsNode;
}

const initialState: SelectedGroupSlice = {};

const selectedGroupSlice = createSlice({
  name: "selectedGroup",
  initialState,
  reducers: {
    setSelectedGroup: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setSelectedGroup } = selectedGroupSlice.actions;
export const selectedGroupSelector = (state: RootState) =>
  state.selectedGroup.value;

export default selectedGroupSlice.reducer;
