import Image from "next/image";
import styled from "styled-components";
import { Img } from "../assets";

export const Footer = ({ scrollToTop }) => {
  return (
    <Wrapper>
      <div onClick={scrollToTop}>
        <Image src={Img.로고s} alt="footer_logo" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1140px;
  margin: auto;
  display: flex;
  justify-content: center;

  & > div {
    cursor: pointer;
  }
`;
