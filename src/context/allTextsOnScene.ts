import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface EverySceneTextsSlice {
  value: EverySceneTextsData[];
}

const initialState: EverySceneTextsSlice = { value: [] };

const everySceneTextsSlice = createSlice({
  name: "everySceneTexts",
  initialState,
  reducers: {
    setEverySceneTexts: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setEverySceneTexts } = everySceneTextsSlice.actions;
export const everySceneTextsSelector = (state: RootState) =>
  state.everySceneTextsData.value;

export default everySceneTextsSlice.reducer;
