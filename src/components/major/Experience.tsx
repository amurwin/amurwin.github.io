"use client";

import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import { Check } from "lucide-react";

export default function Experience() {
  const data = [
    {
      title: "2023 - Present",
      content: (
        <div>
          <div className="text-3xl">Starbucks - Phoenix, AZ</div>
          <div className="text-xl text-neutral-800 dark:text-neutral-200">
            Software Engineer II
          </div>
          <div className="my-8">
            <div className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Microfrontend Architecture
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-accent-500" />
              </div>
              <div>
                Implemented a <strong>React MFE superapp using Webpack Module Federation</strong> to decouple three existing web apps, <strong>improving feature release velocity by 20%</strong> through eliminating testing and deployment bottlenecks.
              </div>
            </div>

            <div className="mt-6 text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Unified Platform
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-accent-500" />
              </div>
              <div>
                Implemented and presented a <strong>React Native Greenfield mobile app unification platform</strong> to cross-functional stakeholders and leadership, providing tradeoffs for governance, security, adoptability, and component ownership to secure alignment on tech stack and approach.
              </div>
            </div>

            <div className="mt-6 text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Webpack v4 → v5 Migration
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-accent-500" />
              </div>
              <div>
                Led migration of 10 modules to Webpack 5, <strong>reducing dev server build time by 40% and improving stability by 30%</strong>, and enabling adoption of Microfrontend architecture for three teams post-migration.
              </div>
            </div>

            <div className="mt-6 text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Design System
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-accent-500" />
              </div>
              <div>
                Led design token alignment effort on <strong>500+ components</strong> to facilitate faster design-to-frontend conversion. First modal redesign implementation led to an <strong>80% reduction in new modal implementation time</strong>.
              </div>
            </div>

            <div className="mt-6 text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Routing Standardization
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-accent-500" />
              </div>
              <div>
                Designed and drove <strong>org-wide adoption of a React Router search parameter pattern</strong> that auto-standardizes parameter validation and default values, <strong>improving routing feature implementation time by 70%</strong>.
              </div>
            </div>

            <div className="mt-6 text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Testing Infrastructure
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-accent-500" />
              </div>
              <div>
                Designed and shipped a <strong>standardized Jest test wrapper</strong> that fixed the most common developer testing gaps and established shared testing patterns at scale, <strong>reducing test development time by 30%</strong>.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="text-3xl">Starbucks - Phoenix, AZ</div>
          <div className="text-xl text-neutral-800 dark:text-neutral-200">
            Web Development Intern
          </div>
          <div className="my-8">
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-accent-500" />
              </div>
              <div>
                Designed and implemented a <strong>Role-Based Access Control (RBAC) feature</strong> using React and GraphQL; enhanced application accessibility with{" "}
                <strong>WCAG 2.1 AA compliant features</strong>, including ARIA labels and improved color contrast.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <div className="text-3xl">Comtech Telecommunications - Tempe, AZ</div>
          <div className="text-xl text-neutral-800 dark:text-neutral-200">
            Software Engineer Intern
          </div>
          <div className="my-8">
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-accent-500" />
              </div>
              <div>
                <strong>Reduced time spent locating project contribution data by 60%</strong> by implementing a full-stack MVC dashboard with C# LDAP integrations against Active Directory.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2018 - 2025",
      content: (
        <div>
          <div className="text-3xl">Mindful Planet - Phoenix, AZ</div>
          <div className="text-xl text-neutral-800 dark:text-neutral-200">
            Business Data Analyst (Freelance)
          </div>
          <div className="my-8">
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-accent-500" />
              </div>
              <div>
                Automated Excel reporting using Python (pymongo, pandas, xlsxwriter) to extract and transform data from a MongoDB database,{" "}
                <strong>establishing a reusable data pipeline</strong> for report generation and documenting the shared database structure for contractor onboarding.
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
