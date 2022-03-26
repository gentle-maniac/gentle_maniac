// @ts-nocheck
import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { device } from "../styles";

export const SectionLayout = React.forwardRef(
  ({ children, justify = "center", ...props }, ref) => {
    return (
      <Section {...props} {...{ justify }} ref={ref}>
        <div>{children}</div>
      </Section>
    );
  }
);
SectionLayout.displayName = "SectionLayout";

const Section = styled.section`
  ${(props) => SectionTheme[props.theme]}

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${(props) => props.justify};
    min-height: 100vh;
    margin: 0 auto;

    @media ${device.mobile} {
      padding-left: 30px;
      padding-right: 30px;
    }
    padding-left: 60px;
    padding-right: 60px;
    max-width: 1140px;
  }
`;

const SectionTheme = {
  black: css`
    color: white;
    background-color: black;
  `,
  white: css`
    color: black;
    background-color: white;
  `,
  primary: css`
    color: white;
    background-color: #d29b3a;
  `,
};
