// @ts-nocheck
import Image from "next/image";
import styled from "styled-components";
import { Img } from "../assets";
import { device } from "../styles";

export const DirectorImage = ({ src, align = "flex-start" }) => {
  return (
    <Wrapper {...{ align }}>
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
    @media ${device.mobile} {
      width: 200px;
    }

    position: relative;
    margin: 0rem 3rem;
    width: 400px;
    height: 100%;
    z-index: 1000;
  }
`;
