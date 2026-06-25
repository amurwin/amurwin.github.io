import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import Footer from "@/components/minor/Footer";
import { PenLine } from "lucide-react";

export const metadata = {
  title: "Blog – Andrew Murwin",
  description: "Articles on frontend engineering, React, and tech projects.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <>
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)]"
      >
        <div className="container mx-auto max-w-3xl px-5 pt-32 pb-20 md:px-10">
          <h1 className="flex items-center gap-3 text-4xl font-bold md:text-5xl">
            Blog
            <PenLine
              className="text-accent-500"
              style={{ width: "1em", height: "1em" }}
              aria-hidden="true"
            />
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Posts on frontend engineering, React, performance, and the tech projects I&apos;m working on.
          </p>

          {articles.length === 0 ? (
            <p className="mt-16 text-neutral-500">No articles yet — check back soon.</p>
          ) : (
            <ul className="mt-12 space-y-10" role="list">
              {articles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-4"
                  >
                    <time
                      dateTime={article.date}
                      className="text-sm text-neutral-500 dark:text-neutral-400"
                    >
                      {formatDate(article.date)}
                    </time>
                    <h2 className="mt-1 text-xl font-semibold text-neutral-900 group-hover:text-accent-500 dark:text-neutral-100 dark:group-hover:text-accent-400 transition-colors">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-accent-500/10 px-3 py-0.5 text-xs font-medium text-accent-600 dark:bg-accent-400/15 dark:text-accent-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <div className="border-t bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)]">
        <Footer />
      </div>
    </>
  );
}
