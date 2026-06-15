import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto max-w-[90rem] px-5 py-10 md:px-10 lg:px-20 lg:py-14">
        <div className="flex justify-between">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Andrew Murwin. All rights reserved.
          </p>
          <a
            href="https://github.com/amurwin/amurwin.github.io"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub repository (opens in new tab)"
            className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
          >
            <Image
              src="/github-white.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="hidden cursor-pointer dark:block"
            />
            <Image
              src="/github-black.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="cursor-pointer dark:hidden"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
