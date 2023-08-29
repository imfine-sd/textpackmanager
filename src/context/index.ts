import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
//Contexts
import mode from "./mode";
import allText from "./allText";
import selectedGroup from "./selectedGroup";
import selectedText from "./selectedText";

const store = configureStore({
  reducer: { mode, allText, selectedGroup, selectedText },
});

type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
