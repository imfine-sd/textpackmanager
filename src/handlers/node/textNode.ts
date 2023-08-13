import Component, { ComponentTextData } from "../../interface/toUI";

const textNodeToData = (textNode: TextNode) => {
  const { id, name, characters, fontName, fontSize, fontWeight, fills } =
    textNode;
  let data: ComponentTextData[] = [];
  if (
    typeof fontName === "string" &&
    typeof fontSize === "number" &&
    typeof fontWeight === "number" &&
    typeof fills !== "symbol"
  ) {
    const newText = {
      characters,
      fontName,
      fontSize,
      fontWeight,
      fills,
    };
    data = [newText];
  } else {
    data = textNode.getStyledTextSegments([
      "fontName",
      "fontSize",
      "fontWeight",
      "fills",
    ]);
  }

  return `${name} : ${characters}`;
};

export default textNodeToData;
