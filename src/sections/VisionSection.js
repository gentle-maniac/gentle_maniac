// @ts-nocheck
import { useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Img } from "../assets";
import { SectionLayout } from "../components";
import { device } from "../styles";

export const VisionSection = () => {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <SectionLayout theme="black">
      <Container ref={parallax} pages={3} horizontal>
        <Page offset={0} gradient="gold" onClick={() => scroll(1)} />
        <Page offset={1} gradient="gold" onClick={() => scroll(2)} />
        <Page offset={2} gradient="gold" onClick={() => scroll(0)} />
      </Container>
    </SectionLayout>
  );
};

const Page = ({ offset, gradient, onClick }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.3} onClick={onClick}>
      <VisionItem>
        <span className="indicator">{offset + 1}</span>
        <div className="icon">
          <Image src={visionData[offset].icon} alt="비전" />
        </div>
        <div className="textWrapper">
          <h1>{visionData[offset].title}</h1>
          <p>{visionData[offset].content}</p>
        </div>
      </VisionItem>
    </ParallaxLayer>
  </>
);

const VisionItem = styled.div`
  @media ${device.mobile} {
    margin-left: 10%;
  }
  position: relative;
  width: 100%;
  margin-left: 22%;

  .indicator {
    @media ${device.mobile} {
      font-size: 400px;
      left: 0px;
    }
    font-family: "Kanit", sans-serif;
    font-size: 500px;
    font-weight: 900;
    color: #54586450;
    line-height: 0px;
    text-transform: uppercase;
    user-select: none;
    position: absolute;
    left: -110px;
    top: 4rem;
  }

  .icon {
    @media ${device.mobile} {
      width: 150px;
      height: 150px;
    }
    width: 200px;
    height: 200px;
  }

  .textWrapper {
    margin-top: 2rem;
    padding-bottom: 1rem;

    h1 {
      margin-bottom: 2rem;
    }
  }
`;

const Container = styled(Parallax)`
  background-color: #20232f;

  & > div > div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .slopeBegin {
    background-color: #20232f;
    clip-path: polygon(20% 0, 70% 0, 50% 100%, 0% 100%);
  }

  .slopeEnd {
    clip-path: polygon(70% 0, 100% 0, 80% 100%, 50% 100%);
  }

  .slopeBegin,
  .slopeEnd {
    position: absolute;
    width: 180%;
    height: 100%;
  }

  .gold {
    background: linear-gradient(to right, tomato 0%, gold 100%);
  }
`;

const visionData = [
  {
    icon: Img.비전01,
    title: "글로벌 서브컬쳐 게임 제작",
    content:
      "페이트처럼 글로벌하게 롱런하는 서브컬쳐게임,\n한국에도 하나쯤은 있어야 하지 않을까?\n우리가 해보자! 우리의 IP로 유니버스를 만들어 보자!",
  },
  {
    icon: Img.비전02,
    title: "서브컬쳐 게임 전문 퍼블리셔",
    content:
      "서브컬쳐 게임 개발은 물론,\n성공적인 자체 서비스를 경험을 바탕으로\n서브컬쳐 게임 퍼블리셔로서 전세계 서브컬쳐 팬들을 만족시키는 회사가 되자!",
  },
  {
    icon: Img.비전03,
    title: "서브컬쳐 DNA를 잘 지켜나가자",
    content:
      "서브컬쳐 팬들을 만족시키기 위해서는 거기에 맞는 DNA가 필요하다.\n우리가 보유한 이런 DNA를 잘 유지하고 발전시키자!",
  },
];
