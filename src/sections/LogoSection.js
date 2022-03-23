import Image from "next/image";
import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { Img } from "../assets";
import { SectionLayout } from "../components";

export const LogoSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const style = useSpring({ opacity: visible ? 1 : 0 });

  return (
    <SectionLayout theme="black">
      <Wrapper style={style}>
        <Image src={Img.로고} alt="로고" />
      </Wrapper>
    </SectionLayout>
  );
};

const Wrapper = styled(animated.div)`
  max-width: 720px;
`;
