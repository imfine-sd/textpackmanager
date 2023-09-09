import React from "react";
import { Text } from "../../base/style/input";
import SearchedList from "./list/SearchedList";

interface SeacrchEngineAttributes {}

function SearchEngine({ ...attrs }: SeacrchEngineAttributes) {
  return (
    <section>
      <Text type="text" />
      <SearchedList />
    </section>
  );
}

export default SearchEngine;
