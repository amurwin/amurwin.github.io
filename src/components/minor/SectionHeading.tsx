export default function SectionHeading({
  heading,
  icon,
  subheading,
}: {
  heading: string;
  icon: import("react").ReactNode;
  subheading: string;
}) {
  const words = heading.split(" ");
  const titlePrefix =
    words.slice(0, -1).join(" ") + (words.length > 1 ? "\u00A0" : "");
  const lastWord = words[words.length - 1] || "";

  return (
    <>
      <h2 className="flex flex-wrap items-center text-4xl font-bold md:text-6xl">
        <span>{titlePrefix}</span>
        <span className="inline-flex items-center whitespace-nowrap">
          {lastWord}
          {icon}
        </span>
      </h2>
      <div className="mt-3 text-lg text-neutral-800 lg:mt-4 dark:text-neutral-300">
        {subheading}
      </div>
    </>
  );
}
