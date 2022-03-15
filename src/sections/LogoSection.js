import styled from "styled-components";
import { SectionLayout } from "../components";

export const LogoSection = () => {
  return (
    <SectionLayout theme="black">
      <Wrapper>
        <span>Gentle Maniac</span>
      </Wrapper>
    </SectionLayout>
  );
};

const Wrapper = styled.div`
  & > span {
    font-size: 5rem;
    font-weight: 900;
  }
`;
