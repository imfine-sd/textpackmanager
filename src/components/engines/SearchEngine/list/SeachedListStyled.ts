import { styled } from "styled-components";

export const SceneList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;
`;

export const Scene = styled.li``;

export const Details = styled.details`
  & > summary {
    list-style: none;
    padding: 8px;
    display: flex;
    font-size: 18px;
    font-weight: 700;
    & input[type="checkbox"] {
      margin-right: 16px;
      border: none;
      background-color: transparent;
    }
  }
  & > summary:hover {
    background-color: var(--color-bg-hover);
  }
  &[open] > summary {
    background-color: var(--color-bg-brand);
  }
`;

export const Article = styled.article``;
