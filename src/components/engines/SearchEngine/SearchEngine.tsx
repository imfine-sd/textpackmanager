import React from "react";
import { Section } from "../../base/style/box";
import { Text } from "../../base/style/input";
import SearchedList from "./Parts/SearchedList";

function SearchEngine() {
  return (
    <Section>
      <Text type="text" />
      <SearchedList />
    </Section>
  );
}

export default SearchEngine;
