import Home from "@/components/home";
import Header from "@/components/header";
import Expertise from "@/components/expertise";
import Project from "@/components/project";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import ScrollToTop from "@/components/scroll-to-top";
import MeteorBackground from "@/components/meteor-background";

export default function Main() {
  return (
    <div className="overflow-x-clip outline-0 relative">
      <MeteorBackground />
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="expertise">
        <Expertise />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <ScrollToTop />
    </div>
  );
}
