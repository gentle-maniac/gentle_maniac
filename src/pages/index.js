import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Footer, Menu, SEO } from "../components";
import {
  HomeSection,
  GreetingSection,
  LogoSection,
  VisionSection,
  WelfareSection,
  TalentSection,
} from "../sections";

export default function Index() {
  const parallaxRef = useRef(null);

  const scrollTo = (to) => {
    parallaxRef.current?.scrollTo(to);
  };

  return (
    <>
      <Menu scrollTo={scrollTo} />
      <SEO />
      <Parallax className="parallax" ref={parallaxRef} pages={7.8}>
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

        <ParallaxLayer offset={4.1} speed={0.1} factor={4}>
          <TalentSection />
        </ParallaxLayer>

        <ParallaxLayer offset={6.7} speed={0.5}>
          <WelfareSection />
        </ParallaxLayer>

        <ParallaxLayer offset={7.6} speed={0.5}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
