"use client";

import { motion } from "motion/react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import { IconBrandLinkedin, IconDownload } from "@tabler/icons-react";
import { Briefcase, Code, GraduationCap } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Starbucks",
    icon: Briefcase,
    position: "Software Engineer II",
    date: "May 2023 - Present",
    description:
      "Building and scaling React/TypeScript applications at enterprise scale. Delivered shared testing infrastructure, led modal design system consolidation, drove org-wide routing standardization, and led the Webpack v4→v5 migration achieving a 38% bundle size reduction.",
  },
  {
    name: "Arizona State University",
    icon: GraduationCap,
    position: "Computer Science (Big Data), M.S.",
    date: "December 2023",
    description:
      "Studied Database Management System Implementation, Distributed Database Systems, Data Mining, Semantic Web Mining, Statistical Machine Learning, Software Testing, and Data Visualization.",
  },
  {
    name: "Starbucks",
    icon: Briefcase,
    position: "Web Development Intern",
    date: "May 2022 - August 2022",
    description:
      "Designed and implemented a Role-Based Access Control (RBAC) feature using React and GraphQL. Enhanced application accessibility with WCAG 2.1 AA compliant features including ARIA labels and improved color contrast.",
  },
  {
    name: "Arizona State University",
    icon: GraduationCap,
    position: "Computer Science, B.S. — Barrett, The Honors College",
    date: "December 2022",
    description:
      "Studied Database Management, Data Structures & Algorithms, Programming Languages, Operating Systems, Software Engineering, and various mathematics.",
  },
  {
    name: "Comtech Telecommunications",
    icon: Briefcase,
    position: "Software Engineer Intern",
    date: "December 2021 - May 2022",
    description:
      "Built a full-stack project contribution dashboard using .NET MVC, with RBAC features via C# LDAP integration against Microsoft Active Directory.",
  },
  {
    name: "Mindful Planet",
    icon: Briefcase,
    position: "Business Data Analyst (Freelance)",
    date: "January 2018 - January 2025",
    description:
      "Automated Excel reporting using Python (pymongo, pandas, xlsxwriter) to extract and transform data from a MongoDB database, establishing a repeatable data pipeline and documenting shared database structure for contractor onboarding.",
  },
];

export default function Hero() {
  return (
    <>
      <div className="relative flex w-full flex-col items-start justify-start">
        <div className="w-full">
          <div className="flex justify-start lg:justify-between">
            <div className="my-auto">
              <motion.div
                initial={{
                  opacity: 0,
                  y: -100,
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
                <h1 className="flex flex-wrap items-center text-5xl font-bold md:text-6xl xl:text-7xl">
                  <span>Hi, I&apos;m{"\u00A0"}</span>
                  <span className="inline-flex items-center whitespace-nowrap">
                    Andrew
                    <Code
                      style={{ width: "1em", height: "1em" }}
                      className="ml-4 text-accent-500 lg:ml-5"
                      aria-hidden="true"
                    />
                  </span>
                </h1>
              </motion.div>
              <motion.p
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                }}
                className="z-10 max-w-2xl py-4 text-start text-lg font-normal text-neutral-900 md:px-0 lg:pr-4 lg:text-left lg:text-xl dark:text-neutral-200"
              >
                I&apos;m a frontend-focused Software Engineer building scalable React/TypeScript applications, shared testing infrastructure, and intuitive user experiences.
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -100,
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
                <div className="mt-2 flex justify-start gap-4 lg:justify-start">
                  <a
                    href="/Andrew-Murwin-Resume.pdf"
                    download
                    className="flex w-36 transform cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-500/90 sm:w-40"
                  >
                    <IconDownload aria-hidden="true" />
                    Resume
                  </a>
                  <a
                    href="https://www.linkedin.com/in/andrew-murwin/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-36 transform cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 sm:w-40 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900"
                  >
                    <IconBrandLinkedin aria-hidden="true" />
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{
                opacity: 0,
                y: -100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
              }}
            >
              <div className="hidden lg:flex">
                <Image
                  src="/profile.jpg"
                  alt="Andrew Murwin"
                  width={288}
                  height={288}
                  className="aspect-square w-72 rounded-full border border-neutral-400/50 object-cover"
                />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
            className="z-10 mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <div className="dark:bg-grid-white/[0.05] flex h-[20rem] flex-col items-center justify-center overflow-hidden rounded-md antialiased">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
