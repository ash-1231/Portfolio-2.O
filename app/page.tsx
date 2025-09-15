import About from "@/components/About";
import CosmicHero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact"


export default function Home() {
  return (
    <>
    <Navbar />
    <div id="hero"><CosmicHero/></div>
    <div id="About"> <About /></div>
    <div id="Skills"><Skills /></div>
    <div id="Projects"><Projects/></div>
    <div id="Contact"><Contact  /></div>
    </>
  );
}
