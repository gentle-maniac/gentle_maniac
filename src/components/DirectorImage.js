// @ts-nocheck
import Image from "next/image";
import styled from "styled-components";
import { Img } from "../assets";

export const DirectorImage = ({ src, width = 400, align = "left" }) => {
  return (
    <Wrapper {...{ align, width }}>
      <div>
        <Image src={Img[src]} alt={src} layout="fill" objectFit="contain" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: ${(props) => props.align};
  max-width: 1140px;
  height: 100%;

  & > div {
    position: relative;
    width: ${(props) => props.width}px;
    height: 100%;
  }
`;
