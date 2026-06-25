"use client";

import { Card } from "@/components/ui/Card";
import { Drill } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import SectionHeading from "../minor/SectionHeading";

export default function Skills() {
  const skills = [
    {
      title: "Programming Languages",
      content: [
        {
          name: "TypeScript",
          image: "/skills/typescript.png",
          description:
            "A superset of JavaScript that adds static typing. My go to language for web development for its incredible flexibility while still maintaining type safety.",
        },
        {
          name: "Python",
          image: "/skills/python.webp",
          description:
            "A versatile language used for data analysis and automation across academic and freelance work. I use it extensively for building automated systems and testing machine learning models.",
        },
        {
          name: "C / C++",
          image: "/skills/c-plus-plus.png",
          description:
            "A low-level language that I used in multiple college courses for learning principles of programming languages, data structures, and algorithms.",
        },
        {
          name: ".NET / C#",
          image: "/skills/c-sharp.png",
          description:
            "Microsoft's in-house framework for building full-stack applications. Useful for building enterprise applications that integrate with features Microsoft's ecosystem like Active Directory.",
        },
        {
          name: "SQL",
          image: "/skills/sql.png",
          description:
            "A language for managing and querying databases. I studied it formally in several databases courses and use it frequently for persistent data storage in personal projects.",
        },
      ],
    },
    {
      title: "Web Development",
      content: [
        {
          name: "React",
          image: "/skills/react.png",
          description:
            "A component-based UI library for building interactive web applications. My go-to for all frontend work due to its flexibility and strong ecosystem.",
        },
        {
          name: "React Router",
          image: "/skills/rr_logo_light.png",
          imageDark: "/skills/rr_logo_dark.png",
          description:
            "A routing library for React applications. I designed and drove org-wide adoption of a search parameter pattern built on React Router that auto-standardizes validation and default values, reducing bugs and accelerating feature development across teams.",
        },
        {
          name: "GraphQL & Apollo Client",
          image: "/skills/graphql.svg",
          description:
            "A query language for APIs that lets clients request exactly the data they need. Used at Starbucks for querying backend services and implementing data-driven features, as well as in personal projects for serving dynamic data.",
        },
        {
          name: "HTML5 & CSS3",
          image: "/skills/html5.svg",
          description:
            "The foundational languages of the web for structure and styling. I have a strong grasp of semantic HTML5 and CSS3, including WCAG 2.1 AA accessibility standards applied in internship work to improve ARIA labels and color contrast.",
        },
        {
          name: "D3.js",
          image: "/skills/d3.png",
          description:
            "A JavaScript library for producing dynamic, interactive data visualizations in web browsers. I learned it formally in a graduate data visualization course and built many highly interactive custom visualizations.",
        },
        {
          name: "Jest",
          image: "/skills/jest.svg",
          description:
          "A JavaScript testing framework for unit and integration tests. I designed and shipped a standardized Jest test wrapper that fixed the most common developer testing gaps and established shared testing patterns at scale, reducing test development time by 30%.",
        },
        {
          name: "React Testing Library",
          image: "/skills/rtl.png",
          description:
          "A testing utility that encourages testing components from the user's perspective. My companion to Jest for asserting component behavior, and central to the shared testing infrastructure I built and maintain at Starbucks.",
        },
        {
          name: "Figma",
          image: "/skills/figma.svg",
          description:
            "A collaborative design tool for building and iterating on UI. I used it during the modal consolidation project to work alongside design partners, reconciling 30 existing implementations into a single reusable pattern.",
        },
      ],
    },
    {
      title: "Data Technologies",
      content: [
        {
          name: "Node.js",
          image: "/skills/nodejs.svg",
          description:
            "A JavaScript runtime for building server-side applications and tooling. I use it in personal projects for building APIs and backend services.",
        },
        {
          name: "PostgreSQL",
          image: "/skills/postgresql.png",
          description:
            "One of the leading open-source SQL databases. I use it in personal projects due to its lightweight nature and the ease of setup and teardown.",
        },
        {
          name: "MongoDB",
          image: "/skills/mongodb.svg",
          description:
            "A document-oriented NoSQL database for flexible, schema-free data storage. I worked with MongoDB as the data source for automated reporting and studied it formally in graduate school.",
        },
        {
          name: "NumPy",
          image: "/skills/numpy.svg",
          description:
            "A fundamental package for scientific computing with Python. I used it in graduate school for numerical computations and data manipulation, especially in conjunction with pandas.",
        },
        {
          name: "pandas",
          image: "/skills/pandas.png",
          description:
            "A Python library for data manipulation and analysis. I used it extensively for data extraction, transformation, and report generation as part of my undergraduate research on cryptocurrency price prediction.",
        },
        {
          name: "PyTorch",
          image: "/skills/pytorch.svg",
          description:
            "An open-source machine learning framework for building and training neural networks. I used it in undergraduate research to build ML models for time-series cryptocurrency price forecasting across different data timesteps.",
        },
      ],
    },
    {
      title: "Tooling",
      content: [
        {
          name: "Webpack",
          image: "/skills/webpack.svg",
          description:
            "A module bundler that compiles JavaScript applications for the browser. I led the Webpack v4→v5 migration of 10 modules at Starbucks, reducing dev server build time by 40% and improving stability by 30%, and enabling Module Federation for microfrontend architecture.",
        },
        {
          name: "Git",
          image: "/skills/git.svg",
          description:
            "A distributed version control system for tracking code changes. My daily driver across all professional and personal work, with strong comfort in branching strategies, PR workflows, and large-team collaboration patterns.",
        },
        {
          name: "Claude Code",
          image: "/skills/claude.png",
          description:
            "An agentic AI coding assistant that operates directly in the terminal. I use it extensively for rapid prototyping, refactoring, test generation, and multi-step engineering tasks across my personal and profressional projects.",
        },
        {
          name: "JIRA",
          image: "/skills/jira.svg",
          description:
            "A project management tool for agile teams. Used for sprint planning, issue tracking, and cross-functional coordination across engineering teams at Starbucks.",
        },
      ],
    },
  ];

  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
        }}
      >
        <SectionHeading
          heading="A Powerful Toolbox"
          icon={
            <Drill
              style={{ width: "1em", height: "1em" }}
              className="ml-4 text-accent-500 md:ml-6"
              aria-hidden="true"
            />
          }
          subheading="Robust, relevant, and always evolving."
        />
      </motion.div>

      {skills.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
          >
            <div className="mt-14 text-2xl font-semibold md:text-3xl">
              {section.title}
            </div>
          </motion.div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {section.content.map((skill, cardIndex) => (
              <motion.div
                key={cardIndex}
                className="flex h-full"
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                }}
              >
                <Card className="gap-3 border-neutral-300 bg-neutral-50/30 p-5 dark:border-neutral-800 dark:bg-neutral-950/30">
                  <div className="flex">
                    <div className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px]">
                      {skill.imageDark ? (
                        <>
                          <Image
                            src={skill.image}
                            alt={skill.name}
                            width={70}
                            height={70}
                            className="block h-[40px] max-h-full w-[40px] object-contain dark:hidden md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px]"
                          />
                          <Image
                            src={skill.imageDark}
                            alt={skill.name}
                            width={70}
                            height={70}
                            className="hidden h-[40px] max-h-full w-[40px] object-contain dark:block md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px]"
                          />
                        </>
                      ) : (
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          width={70}
                          height={70}
                          className="h-[40px] max-h-full w-[40px] object-contain md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px]"
                        />
                      )}
                    </div>
                    <div className="flex flex-col justify-center pl-3">
                      <div className="text-2xl font-semibold md:text-3xl">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm md:text-base dark:text-neutral-300">
                    {skill.description}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
