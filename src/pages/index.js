import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Menu, SEO } from "../components";
import {
  HomeSection,
  GreetingSection,
  LogoSection,
  VisionSection,
} from "../sections";

export default function Index() {
  return (
    <>
      <Menu />
      <SEO />
      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.3}>
          <LogoSection />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2}>
          <HomeSection />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 2, end: 3 }} speed={0.2}>
          <GreetingSection />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.4}>
          <VisionSection />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
