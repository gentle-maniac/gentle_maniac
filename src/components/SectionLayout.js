import styled from "styled-components";
import { css } from "styled-components";

export const SectionLayout = ({ children, ...props }) => {
  return (
    <Section {...props}>
      <div>{children}</div>
    </Section>
  );
};

const Section = styled.section`
  ${(props) => SectionTheme[props.theme]}

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0 auto;

    @media screen and (min-width: 480px) {
      padding-left: 30px;
      padding-right: 30px;
    }
    @media screen and (min-width: 768px) {
      max-width: 780px;
    }
    @media screen and (min-width: 1024px) {
      max-width: 1020px;
    }
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
    background-color: #D29B3A;
  `,
};
