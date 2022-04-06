import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { animated, useSpring } from "react-spring";
import { device } from "../styles";
import { Img } from "../assets";
import { SectionLayout } from "../components";
import { useObserver } from "../utils";

export const WelfareSection = () => {
  return (
    <SectionLayout theme="black">
      <Wrapper>
        <animated.h1>WELFARE</animated.h1>

        <div className="container">
          {welfareData.map((v, i) => SectionItem(v, i))}
        </div>
      </Wrapper>
    </SectionLayout>
  );
};

const SectionItem = (v, i) => {
  const itemRef = useRef(null);
  const itemVisible = useObserver(itemRef, { threshold: 0 });
  const itemStyle = useSpring({
    opacity: itemVisible ? 1 : 0,
    x: itemVisible ? 0 : -150,
  });
  return (
    <animated.div ref={itemRef} style={itemStyle}>
      <WelfareItem key={i}>
        <div className="icon">
          <Image src={v.icon} alt="복지" priority />
        </div>
        <div>
          <div className="title">{v.title}</div>
          <div className="content">{v.content}</div>
        </div>
      </WelfareItem>
    </animated.div>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border-top: 4px solid #d29b3a;

  h1 {
    margin-top: 4rem;
    margin-left: 2rem;
    font-weight: 900;
    color: #d29b3a;
  }
`;

const WelfareItem = styled.div`
  margin-left: 30%;
  margin-bottom: 2rem;
  display: flex;

  & > * + * {
    margin-left: 3rem;
  }

  .icon {
    width: 90px;
    height: 90px;
    border-radius: 16px;
    background-color: gray;
    box-shadow: #d29b3a70 0px 0px 30px 0px;
  }
  .title {
    font-size: 1.75rem;
    font-weight: 900;
    color: #d29b3a;
  }
  .content {
    margin-top: 4px;
  }

  @media ${device.mobile} {
    margin-left: 2rem;

    & > * + * {
      margin-left: 1rem;
    }

    .icon {
      width: 60px;
      height: 60px;
    }

    .title {
      margin-top: 6px;
      font-size: 1rem;
      font-weight: 900;
    }

    .content {
      margin-top: 8px;
      font-size: 12px;
    }
  }
`;

const welfareData = [
  {
    icon: Img.복지01,
    title: "[최신형 업무 장비]",
    content: "일의 효율을 높여요",
  },
  {
    icon: Img.복지02,
    title: "[여유 있는 출근 시간]",
    content: "10시출근으로 복합한 시간대를 피해요",
  },
  {
    icon: Img.복지03,
    title: "[인센티브 제도]",
    content: "성과에 대해선 확실하게 보장해요",
  },
  {
    icon: Img.복지04,
    title: "[다양한 간식 제공]",
    content: "직원들이 좋아하는 걸로 준비해요",
  },
  {
    icon: Img.복지05,
    title: "[청년내일채움 가입 적용]",
    content: "목돈마련 회사에서 정부에서 함께 도와줘요",
  },
  {
    icon: Img.복지06,
    title: "[회식강요 워크샵 놉!]",
    content: "꼰대 문화 없어요",
  },
  {
    icon: Img.복지07,
    title: "[건강을 위하여]",
    content: `매월 1회 피자 or 버거파티\n영양제 구비 직원 건강을 챙겨요`,
  },
];
