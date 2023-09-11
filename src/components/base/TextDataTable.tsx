import React from "react";
import { styled } from "styled-components";

const TableContainer = styled.details`
  /* padding-left: 20px; */
  &:hover > summary {
    border: 1px solid var(--color-border);
  }
  &[open] > summary {
    background-color: var(--color-bg-brand);
  }
  & > summary {
    list-style: none;
    padding: 8px;
    padding-left: 26px;
    display: flex;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid transparent;

    & input[type="checkbox"] {
      margin-right: 16px;
      border: none;
      background-color: transparent;
    }
  }
`;

const Table = styled.table`
  margin-left: 26px;
  padding: 8px 12px;
  font-size: 14px;
  & * {
  }
  & tr {
    padding: 3px 6px;
    background-color: var(--color-bg);
  }
  & th.itemName {
    width: 30px;
  }
  & th {
    width: 100px;
    text-align: start;
  }
  & td {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

type TextDataTableAttributes = {
  data: TextData;
  index?: number;
};

function TextDataTable({ data, index }: TextDataTableAttributes) {
  return (
    <TableContainer>
      <summary>
        <input type="checkbox" name={data.id} />
        {index ? `${index + 1}` : data.name}
      </summary>
      <Table key={data.id}>
        <tr>
          <th>contents</th>
          <td>{data.characters}</td>
        </tr>
        <tr>
          <th rowSpan={5}>style</th>
          <th>color</th>
          <td>TBD</td>
        </tr>
        <tr>
          <th>font-size</th>
          <td>{data.fontSize}px</td>
        </tr>
        <tr>
          <th>font-style</th>
          <td>{data.fontName.style}</td>
        </tr>
        <tr>
          <th>font-family</th>
          <td>{data.fontName.family}</td>
        </tr>
        <tr>
          <th>font-weight</th>
          <td>{data.fontWeight}</td>
        </tr>
      </Table>
    </TableContainer>
  );
}

export default TextDataTable;
