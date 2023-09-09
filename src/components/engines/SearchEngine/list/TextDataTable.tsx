import React from "react";
import { styled } from "styled-components";

const TableContainer = styled.details`
  padding-left: 20px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid var(--color-border);
  }
  &[open] {
    background-color: var(--color-bg-brand);
  }
  & > summary {
    list-style: none;
    padding: 8px;
    padding-left: 16px;
    display: flex;
    font-size: 16px;
    font-weight: 400;
    & input[type="checkbox"] {
      margin-right: 16px;
      border: none;
      background-color: transparent;
    }
  }
`;

const Table = styled.table`
  margin-left: 16px;
  padding: 8px 12px;
  font-size: 14px;
  & * {
  }
  & tr {
    padding: 3px 6px;
    background-color: var();
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
  index: number;
};

function TextDataTable({ data, index }: TextDataTableAttributes) {
  return (
    <TableContainer>
      <summary>
        <input type="checkbox" name={data.id} />
        {`${index + 1}`}
      </summary>
      <Table key={data.id}>
        <tr>
          <th>contents</th>
          <td>{data.characters}</td>
        </tr>
        <tr>
          <th>font-family</th>
          <td>{data.fontName.family}</td>
        </tr>
        <tr>
          <th>font-style</th>
          <td>{data.fontName.style}</td>
        </tr>
      </Table>
    </TableContainer>
  );
}

export default TextDataTable;
