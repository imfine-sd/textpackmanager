import React, { useMemo } from "react";
import { useAppSelector } from "../context";
import { selectedTextSelector } from "../context/selectedText";
import { Article, Section } from "./base/style/box";
import TextDataTable from "./base/TextDataTable";

function SelectedText() {
  const selectedTextNode = useAppSelector(selectedTextSelector);
  const selectedTextDatas = useMemo(() => {
    if (!selectedTextNode) return;
    const { id, name } = selectedTextNode;
    const data = {
      id,
      name,
      ...data,
    };

    return data;
  }, [selectedTextNode]);

  return selectedTextNode ? (
    <Section>
      <Article>
        <h1>Selected Text Node</h1>
      </Article>
      {selectedTextDatas?.map((data) => (
        <TextDataTable data={data}></TextDataTable>
      ))}
    </Section>
  ) : null;
}

export default SelectedText;
