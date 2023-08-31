import React from "react";
import { useAppSelector } from "../context";
import { modeSelector } from "../context/mode";
import AllTextUI from "./MainUI";
import GroupUI from "./GroupUI";
import TextUI from "./TextUI";
import NoTextUI from "./NoTextUI";

function Router() {
  const mode = useAppSelector(modeSelector);
  switch (mode) {
    case "Page":
      return <AllTextUI />;
    case "Group":
      return <GroupUI />;
    case "Text":
      return <TextUI />;
    case "NoText":
      return <NoTextUI />;
  }
}

export default Router;
