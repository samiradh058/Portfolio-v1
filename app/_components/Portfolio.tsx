"use client";

import Nav from "./Nav";
import Hero from "./Hero";
import Marquee from "./Marquee";
import About from "./About";
import Work from "./Work";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Portfolio() {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans scroll-smooth">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}
