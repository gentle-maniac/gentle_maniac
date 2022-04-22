import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { DirectorImage, Footer, Menu, SEO } from "../components";
import {
  HomeSection,
  GreetingSection,
  LogoSection,
  VisionSection,
  WelfareSection,
  TalentSection,
  MakingSection,
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
      <Parallax className="parallax" ref={parallaxRef} pages={10.7}>
        <ParallaxLayer offset={0} speed={0.3}>
          <LogoSection />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2}>
          <HomeSection />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.2}>
          <GreetingSection />
        </ParallaxLayer>

        <ParallaxLayer offset={3.3} speed={0.2}>
          <VisionSection />
        </ParallaxLayer>

        <ParallaxLayer offset={4.4} speed={0.1} factor={4}>
          <TalentSection />
        </ParallaxLayer>

        <ParallaxLayer offset={7.0} speed={0.4}>
          <WelfareSection />
        </ParallaxLayer>

        <ParallaxLayer offset={8.5} speed={0.1}>
          <MakingSection />
        </ParallaxLayer>

        <ParallaxLayer offset={10.3} speed={0.3}>
          <Footer scrollToTop={() => scrollTo(0)} />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  const isMobile = /Android|webOS|iPhone/i.test(userAgent);

  return { isMobile };
};
