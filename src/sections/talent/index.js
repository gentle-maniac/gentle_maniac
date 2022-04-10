// @ts-nocheck
import { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { SectionLayout } from "../../components";
import { device } from "../../styles";
import { useObserver } from "../../utils";
import { talentData } from "./talentData";
import { TalentItem } from "./TalentItem";

export const TalentSection = () => {
  const titleRef = useRef(null);
  const visible = useObserver(titleRef);

  const titleStyle = useSpring({
    opacity: visible ? 1 : 0,
    x: visible ? 0 : -100,
  });

  return (
    <SectionLayout theme="black">
      <Wrapper>
        <animated.h1 ref={titleRef} style={titleStyle}>
          젠틀매니악의 인재상
        </animated.h1>

        <div>
          {talentData.map((item, index) => (
            <TalentItem key={index} item={item} index={index} />
          ))}
        </div>
      </Wrapper>
    </SectionLayout>
  );
};

const Wrapper = styled.div`
  & > :last-child {
    @media ${device.mobile} {
      margin-top: 4rem;
    }
    margin-top: 10rem;

    & > *:nth-child(even) {
      direction: rtl;
    }

    & > * + * {
      @media ${device.mobile} {
        margin-top: 4rem;
      }
      margin-top: 10rem;
    }
  }
`;
