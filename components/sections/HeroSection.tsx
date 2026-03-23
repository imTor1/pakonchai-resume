type Props = {
  lang: "en" | "th";
  dict: {
    name: string;
    lastname: string;
    role: string;
    availability: string;
    description: {
      part1: string;
      highlight1: string;
      part2: string;
      highlight2: string;
      part3: string;
      highlight3: string;
    };
  };
};

export default function HeroSection({ dict }: Props) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-[5vw] py-24 md:py-0 overflow-hidden"
    >
      {/* badge */}
      <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-widest uppercase text-neutral-500 border border-neutral-200 dark:border-neutral-800 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full w-fit mb-8 md:mb-10">
        <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
        {dict.availability}
      </div>
      <h1
        className="font-serif text-[clamp(3rem,8vw,8rem)] leading-[1.1] md:leading-[0.95] tracking-tight mb-2 md:mb-4"
      >
        {dict.name}
        <br />
        <em className="text-neutral-400">{dict.lastname}</em>
      </h1>

      {/* Role */}
      <div className="flex items-center gap-3 sm:gap-4 mb-8 md:mb-10">
        <span
          className="font-sans text-[clamp(1rem,2.5vw,1.4rem)] font-light text-neutral-500"
        >
          {dict.role}
        </span>
        <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
      </div>

      {/* Description */}
      <p
        className="font-sans font-light text-neutral-500 text-sm sm:text-base md:text-lg leading-relaxed mb-10 md:mb-12"
      >
        {dict.description.part1}{" "}
        <span className="text-neutral-900 dark:text-white font-normal">
          {dict.description.highlight1}{" "}
        </span>{" "}
        {dict.description.part2}{" "}
        <span className="text-neutral-900 dark:text-white font-normal">
          {dict.description.highlight2}
        </span>{" "}
        {dict.description.part3}{" "}
        <span className="text-neutral-900 dark:text-white font-normal">
          {dict.description.highlight3}
        </span>
      </p>

      {/* Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-12 md:mb-16">
        <a
          href="https://github.com/imTor1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black dark:bg-white text-white dark:text-black text-sm font-medium px-7 py-3 rounded-full hover:opacity-80 transition-opacity text-center w-full sm:w-auto"
        >
          View GitHub
        </a>
        <a
          className="text-neutral-500 dark:text-white font-normal text-sm sm:text-base hover:text-neutral-900 transition-colors"
        >
          prakonchai2546@gmail.com
        </a>
      </div>
    </section>
  );
}