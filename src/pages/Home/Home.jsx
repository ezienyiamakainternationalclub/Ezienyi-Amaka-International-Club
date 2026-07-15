import "./Home.css";

import Hero from "../../sections/Hero/Hero";
import Mission from "../../sections/Mission/Mission";
import CoreValues from "../../sections/CoreValues/CoreValues";
import Statistics from "../../sections/Statistics/Statistics";
import Executives from "../../sections/Executives/Executives";
import CTA from "../../sections/CTA/CTA";

import ProjectCards from "../../components/ProjectCards/ProjectCards";

export default function Home() {
  return (
    <>
      <Hero />

      <Mission />

      <CoreValues />

      <Statistics />

      <Executives />

      <ProjectCards />

      <CTA />
    </>
  );
}