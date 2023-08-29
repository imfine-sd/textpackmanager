import React from "react";
import { useAppSelector } from "../context";
import { allTextSelector } from "../context/allText";

function AllTextUI() {
  const allText = useAppSelector(allTextSelector);

  return (
    <main>
      {allText.map((text, textIndex) => (
        <section key={text.name + textIndex}>
          <h1>{text.name}</h1>
          <ul>
            {text.textNodes.map((textNode, nodeIndex) => (
              <li key={`${textIndex}-${nodeIndex}`}>{textNode.name}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}

export default AllTextUI;
