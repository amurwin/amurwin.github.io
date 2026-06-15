import Hero from "@/components/major/Hero";
import Experience from "../components/major/Experience";
import Education from "../components/major/Education";
import Skills from "../components/major/Skills";
import Navbar from "@/components/major/Navbar";
import Footer from "@/components/minor/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>
      <div id="home" className="bg-accent-500">
        <div className="container mx-auto max-w-[90rem] px-5 py-2 md:px-10 lg:px-20">
          <Navbar />
        </div>
      </div>
      <main id="main-content">
        <div className="bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)]">
          <div className="container mx-auto max-w-[90rem] px-5 pt-30 pb-8 md:px-10 lg:px-20">
            <Hero />
          </div>
        </div>
        <section
          id="experience"
          aria-label="Experience"
          className="border-t bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)]"
        >
          <div className="container mx-auto max-w-[90rem] px-5 py-10 md:px-10 lg:px-20 lg:py-20">
            <Experience />
          </div>
        </section>
        <section
          id="education"
          aria-label="Education"
          className="border-t bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)]"
        >
          <div className="container mx-auto max-w-[90rem] px-5 py-10 md:px-10 lg:px-20 lg:py-20">
            <Education />
          </div>
        </section>
        <section
          id="skills"
          aria-label="Skills"
          className="border-t bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)]"
        >
          <div className="container mx-auto max-w-[90rem] px-5 py-10 md:px-10 lg:px-20 lg:py-20">
            <Skills />
          </div>
        </section>
      </main>
      <div className="border-t bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)]">
        <Footer />
      </div>
    </>
  );
}
