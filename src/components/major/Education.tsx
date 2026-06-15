"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import SectionHeading from "../minor/SectionHeading";
import { Badge } from "../ui/Badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/Carousel";

export default function Education() {
  const degrees = [
    {
      title: "Computer Science, M.S.",
      institution: "Arizona State University",
      dates: "December 2023",
      concentration: "Big Data",
      gpa: 4.0,
      overview:
        "Focused on designing and deploying scalable systems for processing and analyzing large-scale datasets. Studied distributed computing, data mining, machine learning, and visualization through project-based learning.",
      coursework: [
        "Database Management System Implementation",
        "Distributed Database Systems",
        "Data Mining",
        "Semantic Web Mining",
        "Statistical Machine Learning",
        "Software Verification, Validation and Testing",
        "Data Visualization",
        "Knowledge Representation",
        "Mobile Computing",
      ],
      papers: [
        {
          title: "Context-Aware Mobile Application for Mitigating Sleep Deprivation-Related Vehicular Traffic Accidents",
          href: "/papers/context-aware-mobile-sleep-deprivation.pdf",
          src: "/papers/screenshots/context-aware-mobile-sleep-deprivation.jpg",
        },
        {
          title: "Fiscal Clarity: Turning Data into Insights for Engagement, Ohio",
          href: "/papers/fiscal-clarity-engagement-ohio.pdf",
          src: "/papers/screenshots/fiscal-clarity-engagement-ohio.jpg",
        },
        {
          title: "Fraud Detection with Graph Databases and Machine Learning",
          href: "/papers/fraud-detection-graph-databases.pdf",
          src: "/papers/screenshots/fraud-detection-graph-databases.jpg",
        },
        {
          title: "Predicting and Comparing Brain Networks",
          href: "/papers/predicting-comparing-brain-networks.pdf",
          src: "/papers/screenshots/predicting-comparing-brain-networks.jpg",
        },
        {
          title: "Sentiment Analysis on IMDB Reviews Using Ensemble of SVM Models",
          href: "/papers/sentiment-analysis-imdb-svm.pdf",
          src: "/papers/screenshots/sentiment-analysis-imdb-svm.jpg",
        },
      ],
    },
    {
      title: "Computer Science, B.S.",
      institution: "Arizona State University — Barrett, The Honors College",
      dates: "December 2022",
      gpa: 4.0,
      overview:
        "Studied the design, development, and analysis of software systems, building a strong foundation in programming, data structures, algorithms, and computer systems.",
      coursework: [
        "Database Management",
        "Software Engineering",
        "Data Structures & Algorithms",
        "Multimedia Information Systems",
        "Operating Systems",
        "Programming Languages",
        "Object-Oriented Programming & Data Structures",
        "Theoretical Computer Science",
        "Probability & Statistics Engineering Problem Solving",
      ],
      papers: [
        {
          title: "Undergraduate Thesis:\nThe Efficacy of Different Timesteps in Data when Predicting Cryptocurrency Prices",
          href: "/papers/cryptocurrency-price-prediction-timesteps.pdf",
          src: "/papers/screenshots/cryptocurrency-price-prediction-timesteps.jpg",
        },
        {
          title: "Undergraduate Capstone:\nSimulating Construction Installation Projects in Augmented Reality",
          href: "/papers/simulating-construction-ar.pdf",
          src: "/papers/screenshots/simulating-construction-ar.jpg",
        },
      ],
    },
  ];

  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
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
          heading="Academic Excellence"
          icon={
            <GraduationCap
              style={{ width: "1em", height: "1em" }}
              className="ml-3 text-accent-500 md:ml-5"
              aria-hidden="true"
            />
          }
          subheading="Rigorous study in computer science and engineering principles."
        />
      </motion.div>

      {degrees.map((degree, index) => (
        <div
          className="grid gap-5 overflow-x-hidden lg:my-16 lg:grid-cols-2 lg:gap-20"
          key={index}
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
            className="my-6 lg:col-span-1 lg:my-0"
          >
            <div className="text-3xl font-bold">{degree.title}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge className="bg-accent-500 text-neutral-100">
                {degree.institution}
              </Badge>
              <Badge className="bg-accent-500 text-neutral-100">
                {degree.dates}
              </Badge>
              {degree.concentration ? (
                <Badge className="bg-accent-500 text-neutral-100">
                  {degree.concentration}
                </Badge>
              ) : null}
              {degree.gpa ? (
                <Badge className="bg-accent-500 text-neutral-100">
                  {degree.gpa}
                </Badge>
              ) : null}
            </div>
            <div className="mt-7 text-xl font-bold dark:text-neutral-200">
              Overview
            </div>
            <div className="mt-1 text-neutral-800 dark:text-neutral-300">
              {degree.overview}
            </div>
            <div className="mt-5 text-xl font-bold dark:text-neutral-200">
              Key Coursework
            </div>
            <div className="mt-1 text-neutral-800 dark:text-neutral-300">
              <ul className="list-inside list-disc">
                {degree.coursework.map((course, courseIndex) => (
                  <li key={courseIndex}>{course}</li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
            className="mb-16 lg:col-span-1 lg:mx-12 lg:mb-0"
          >
            <Carousel className="mx-auto w-full rounded-xl border-3 border-neutral-600 dark:border-0">
                  <CarouselContent>
                    {degree.papers.map((paper, index) => (
                      <CarouselItem key={index} className="relative">
                        <img
                          src={paper.src}
                          alt={paper.title}
                          className="w-full rounded-xl opacity-40"
                        />
                        <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center gap-5 px-10 font-bold sm:text-2xl dark:text-white">
                          <div className="whitespace-pre-line text-center">{paper.title}</div>
                          <a href={paper.href} download>
                            <button className="flex cursor-pointer items-center gap-2 rounded-lg bg-accent-500 px-4 py-2 text-sm text-white hover:bg-accent-600">
                              ↓ Download
                            </button>
                          </a>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
            </Carousel>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
