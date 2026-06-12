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
              Testing Infrastructure
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-accent-500" />
              </div>
              <div>
                Designed and shipped a <strong>standardized Jest test wrapper now used in 90% of new React component tests</strong> across the codebase, fixing the most common developer testing gaps and establishing shared test ownership patterns at scale.
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
                Led modal component consolidation effort in partnership with design by auditing 30 existing implementations, reconciling conflicting requirements, and delivering a scalable, reusable pattern that{" "}
                <strong>reduced modal implementation time by 80%</strong>.
              </div>
            </div>

            <div className="mt-6 text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Microfrontend Architecture
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-accent-500" />
              </div>
              <div>
                Built a proof-of-concept <strong>microfrontend implementation using Webpack Module Federation</strong>, demonstrating feasibility of decoupling a shared codebase to accelerate co-located team feature development and reduce deployment dependencies.
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
                Designed and drove <strong>org-wide adoption of a React Router search parameter pattern</strong> that auto-standardizes parameter validation and default values, reducing bugs and accelerating feature development across teams.
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
                Led full codebase migration and achieved a{" "}
                <strong>38% bundle size reduction</strong> through tree shaking, code splitting, and reducing unnecessary region support; reduced build times and unblocked adoption of Webpack 5 features including Module Federation.
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
                Built a <strong>full-stack project contribution dashboard</strong> using .NET MVC, with RBAC features via C# LDAP integration against Microsoft Active Directory.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2018",
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
                <strong>establishing a repeatable data pipeline</strong> for report generation and documenting the shared database structure for contractor onboarding.
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
