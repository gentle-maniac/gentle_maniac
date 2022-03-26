import Image from "next/image";
import styled from "styled-components";
import { Img } from "../assets";

export const Footer = () => {
  return (
    <Wrapper>
      <Image src={Img.로고s} alt="footer_logo" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1140px;
  margin: auto;
  display: flex;
  justify-content: center;
`;
