import { styled } from "styled-components";

export const SceneList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;
`;

export const Scene = styled.li``;

export const Details = styled.details`
  & > summary:hover,
  &[open] > summary {
    background-color: #0090a0;
  }
`;

export const Summary = styled.summary`
  list-style: none;
  padding: 4px 8px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
`;

export const Article = styled.article`
  padding: 0px 12px;
  & h1 {
    font-size: 14px;
    font-weight: 500;
  }

  & ul {
  }
`;
