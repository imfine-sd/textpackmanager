import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
//Contexts
import queriedTextData from "./queriedTexts";
import selectedGroup from "./selectedGroup";
import selectedText from "./selectedText";

const store = configureStore({
  reducer: { queriedTextData, selectedGroup, selectedText },
});

type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
