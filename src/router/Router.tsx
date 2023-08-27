import React from "react";
import { useAppSelector } from "../context";
import { modeSelector } from "../context/mode";
import PageUI from "./PageUI";
import GroupUI from "./GroupUI";
import TextUI from "./TextUI";

function Router() {
  const mode = useAppSelector(modeSelector);
  switch (mode) {
    case "Page":
      return <PageUI />;
    case "Group":
      return <GroupUI />;
    case "Text":
      return <TextUI />;
  }
}

export default Router;
