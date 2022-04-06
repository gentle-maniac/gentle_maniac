// @ts-nocheck
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { Img } from "../assets";
import { SectionLayout } from "../components";
import { useObserver } from "../utils";

export const LogoSection = () => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const visible = useObserver(ref);

  const { opacity } = useSpring({ opacity: mounted ? 1 : 0 });
  const style = useSpring({ transform: visible ? "scale(1.0)" : "scale(0.7)" });

  return (
    <SectionLayout theme="black">
      <Wrapper ref={ref} style={{ opacity, ...style }}>
        <Image src={Img.로고} alt="로고" priority />
      </Wrapper>
    </SectionLayout>
  );
};

const Wrapper = styled(animated.div)`
  max-width: 720px;
`;
