import Hero from "@/components/major/Hero";
import Experience from "../components/major/Experience";
import Education from "../components/major/Education";
import Skills from "../components/major/Skills";
import Navbar from "@/components/major/Navbar";
import Footer from "@/components/minor/Footer";

export default function Home() {
  return (
    <>
      <div id="home" className="bg-accent-500">
        <div className="container mx-auto max-w-[90rem] px-5 py-2 md:px-10 lg:px-20">
          <Navbar />
        </div>
      </div>
      <div className="bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)]">
        <div className="container mx-auto max-w-[90rem] px-5 pt-30 pb-8 md:px-10 lg:px-20">
          <Hero />
        </div>
      </div>
      <div
        id="experience"
        className="border-t bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)]"
      >
        <div className="container mx-auto max-w-[90rem] px-5 py-10 md:px-10 lg:px-20 lg:py-20">
          <Experience />
        </div>
      </div>
      <div
        id="education"
        className="border-t bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)]"
      >
        <div className="container mx-auto max-w-[90rem] px-5 py-10 md:px-10 lg:px-20 lg:py-20">
          <Education />
        </div>
      </div>
      <div
        id="skills"
        className="border-t bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)]"
      >
        <div className="container mx-auto max-w-[90rem] px-5 py-10 md:px-10 lg:px-20 lg:py-20">
          <Skills />
        </div>
      </div>
      <div className="border-t bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)]">
        <Footer />
      </div>
    </>
  );
}
