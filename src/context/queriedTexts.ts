import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface QueriedTextDataSlice {
  value: SceneTexts[];
}

const initialState: QueriedTextDataSlice = { value: [] };

const queriedTextDataSlice = createSlice({
  name: "queriedTextData",
  initialState,
  reducers: {
    setQueriedTexts: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setQueriedTexts } = queriedTextDataSlice.actions;
export const queriedTextDataSelector = (state: RootState) =>
  state.queriedTextData.value;

export default queriedTextDataSlice.reducer;
