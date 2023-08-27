// export type TextData = Pick<
//   StyledTextSegment,
//   "characters" | "start" | "end" | "fontSize" | "fontName" | "fontWeight"
// >;

export function textNodeToData(node: TextNode) {
  const textData = node.getStyledTextSegments([
    "fontName",
    "fontSize",
    "fontWeight",
    "fills",
  ]);

  return textData;
}
