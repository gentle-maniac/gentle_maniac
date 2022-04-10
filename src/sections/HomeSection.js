// @ts-nocheck
import Image from "next/image";
import { useRef } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { Img } from "../assets";
import { SectionLayout, Trail } from "../components";
import { device } from "../styles";
import { useObserver } from "../utils";

export const HomeSection = () => {
  const ref = useRef(null);
  const visible = useObserver(ref);
  const backgroundStyle = useSpring({
    opacity: visible ? 0.3 : 0,
    config: { duration: 1000 },
  });

  return (
    <SectionLayout ref={ref} theme="primary">
      <Wrapper>
        <Trail open={visible}>
          <div>
            <h2>
            국내대표 서브컬쳐게임 핵심 개발진<p>으로 구성된</p>
            </h2>
          </div>
          <h1>
            국내 최고의 <span className="u">서브컬처</span> 게임 개발사
          </h1>
        </Trail>
      </Wrapper>

      <Wrapper>
        <div className="right">
          <Trail open={visible} delay={200}>
            <p>라스트오리진 개발 총괄</p>
            <p>프로듀서, 아트디렉터, 프로그래밍총괄 등</p>
            <p>라스트오리진 초기부터 개발한 핵심 개발진으로 이루어진 팀</p>
          </Trail>
        </div>
      </Wrapper>

      <Background style={backgroundStyle}>
        <Image
          src={Img.아케인_클라우드_썸네일}
          alt="아케인_클라우드_썸네일"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Background>
    </SectionLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 2rem 0;

  h1 {
    margin: 0;
  }
  h2 {
    p {
      display: inline-block;
    }
  }
  p {
    font-weight: 700;
  }

  .row {
    display: flex;
    align-items: flex-end;
  }
  .right {
    @media ${device.mobile} {
      margin-left: auto;
    }
    margin-left: 40%;
  }

  & > * + * {
    margin-left: 1.5rem;
  }
`;

const Background = styled(animated.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  pointer-events: none;
`;
