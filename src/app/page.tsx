import About from "@/components/about/About";
import Contact from "@/components/Contact/Contact";
import Navbar from "@/components/navBar/page";
import Profile from "@/components/profile/Profile";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/services/Services";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className=" text-white relative min-h-screen">
      {/* Animated Shapes */}
      {/* <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div> */}


      <Navbar />




      <Profile />




      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}
