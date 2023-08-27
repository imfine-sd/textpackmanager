import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface ModeSlice {
  value: Mode;
}

const initialState: ModeSlice = { value: "Page" };

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state, { payload }: PayloadAction<Mode>) => {
      state.value = payload;
    },
  },
});

export const { setMode } = modeSlice.actions;
export const modeSelector = (state: RootState) => state.mode.value;

export default modeSlice.reducer;
