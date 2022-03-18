import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Menu, SEO } from "../components";
import {
  HomeSection,
  GreetingSection,
  LogoSection,
  VisionSection,
  WelfareSection,
  TalentSection,
} from "../sections";

export default function Index() {
  return (
    <>
      <Menu />
      <SEO />
      <Parallax pages={6}>
        <ParallaxLayer offset={0} speed={0.3}>
          <LogoSection />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2}>
          <HomeSection />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.2}>
          <GreetingSection />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.2}>
          <VisionSection />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.4}>
          <TalentSection />
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0.4}>
          <WelfareSection />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
