import React, { HTMLAttributes } from "react";
import { styled } from "styled-components";

const NaviSection = styled.nav`
  & ol {
    list-style-type: none;
    padding-left: 0;
  }

  & {
    display: inline-block;
  }

  & a::after {
    display: inline-block;
    color: #000;
    content: ">";
    font-size: 80%;
    font-weight: bold;
    padding: 0 3px;
  }
`;

interface NavgationAttributes extends HTMLAttributes<HTMLElement> {}

function Navgation({ ...attrs }: NavgationAttributes) {
  return (
    <NaviSection {...attrs}>
      <ol>{}</ol>
    </NaviSection>
  );
}

export default Navgation;
