import React from "react";
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

      <LogoSection />
      <HomeSection />
      <GreetingSection />
      <VisionSection />
    </>
  );
}
