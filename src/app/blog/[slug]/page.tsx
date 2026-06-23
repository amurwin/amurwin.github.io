import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getArticle } from "@/lib/articles";
import Footer from "@/components/minor/Footer";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} – Andrew Murwin`,
    description: article.description,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <main
        id="main-content"
        className="min-h-screen bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)]"
      >
        <div className="container mx-auto max-w-3xl px-5 pt-32 pb-20 md:px-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-accent-500 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All articles
          </Link>

          <article className="mt-8">
            <header className="mb-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-500/10 px-3 py-0.5 text-xs font-medium text-accent-600 dark:bg-accent-400/15 dark:text-accent-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl font-bold leading-tight text-neutral-900 dark:text-neutral-100 md:text-4xl">
                {article.title}
              </h1>
              <time
                dateTime={article.date}
                className="mt-3 block text-sm text-neutral-500 dark:text-neutral-400"
              >
                {formatDate(article.date)}
              </time>
            </header>

            <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-a:text-accent-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-accent-400 prose-code:rounded prose-code:bg-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono prose-code:text-neutral-800 dark:prose-code:bg-neutral-800 dark:prose-code:text-neutral-200 prose-pre:rounded-lg prose-pre:bg-neutral-900 prose-pre:p-4 dark:prose-pre:bg-neutral-800 prose-pre:overflow-x-auto prose-blockquote:border-l-accent-500 prose-blockquote:text-neutral-600 dark:prose-blockquote:text-neutral-400">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </main>
      <div className="border-t bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)]">
        <Footer />
      </div>
    </>
  );
}
