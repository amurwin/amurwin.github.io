"use client";
import { TrendingUp } from "lucide-react";
import { useScroll, useTransform, motion } from "motion/react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import SectionHeading from "../minor/SectionHeading";

interface TimelineEntry {
  title: string;
  content: ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * 1],
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="mb-0 w-full font-sans lg:mt-0" ref={containerRef}>
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
          heading="Quality Code, Real Results"
          icon={
            <TrendingUp
              style={{ width: "1em", height: "1em" }}
              className="ml-3 text-accent-500 md:ml-5"
            />
          }
          subheading="Over 3 years of professionally building and shipping front-end applications."
        />
      </motion.div>

      <div ref={ref} className="relative mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
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
          >
            <div className="mt-12 flex justify-start md:mt-24 md:gap-10">
              <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
                <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 md:left-3">
                  <div className="h-4 w-4 rounded-full border border-neutral-300 bg-white p-2 dark:border-neutral-700 dark:bg-neutral-950" />
                </div>
                <h3 className="hidden text-xl font-bold text-neutral-600 md:block md:pl-20 md:text-5xl dark:text-neutral-400">
                  {item.title}
                </h3>
              </div>
              <div className="relative w-full pr-4 pl-20 md:pl-4">
                <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-600 md:hidden dark:text-neutral-400">
                  {item.title}
                </h3>
                {item.content}{" "}
              </div>
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute top-0 left-8 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-accent-500 from-[0%] via-accent-500 via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
