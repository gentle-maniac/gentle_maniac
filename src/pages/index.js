import React from "react";
import { SEO } from "../components";
import {
  HomeSection,
  GreetingSection,
  LogoSection,
  VisionSection,
} from "../sections";

export default function Index() {
  return (
    <>
      <SEO />

      <LogoSection />
      <HomeSection />
      <GreetingSection />
      <VisionSection />
    </>
  );
}
