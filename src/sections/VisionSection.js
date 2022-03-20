import { useRef } from "react";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { SectionLayout } from "../components";

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
      <div>
        <span className="indicator">{offset + 1}</span>
        <h1>젠틀매니악의 비젼</h1>
        <div>
          <div>글로벌 서브컬처 게임 제작</div>
          <div>
            페이트처럼 글로벌하게 롱런하는 서브컬처게임이 한국에도 하나는 있어야
            하지 않을까? 우리가 해 보자. 우리의 IP로 유니버스를 만들어 보자.
          </div>
        </div>
      </div>
    </ParallaxLayer>
  </>
);

const Container = styled(Parallax)`
  background-color: #20232f;

  & > div > div {
    display: flex;
    align-items: center;
    justify-content: center;
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

  .indicator {
    font-family: "Kanit", sans-serif;
    font-size: 500px;
    font-weight: 900;
    color: #54586450;
    line-height: 0px;
    text-transform: uppercase;
  }
`;
