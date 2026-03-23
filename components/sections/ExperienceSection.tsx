import {
  SiLaravel,
  SiVuedotjs,
  SiMysql,
  SiFlutter,
  SiNodedotjs,
  SiExpress,
  SiDart,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import GithubReadmePreview from "@/components/sections/GithubReadmePreview";

const tagIcons = {
  Laravel: SiLaravel,
  "Vue.js": SiVuedotjs,
  MySQL: SiMysql,
  Flutter: SiFlutter,
  Dart: SiDart,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
};

const tagColors: Record<keyof typeof tagIcons, string> = {
  Laravel: "#FF2D20",
  "Vue.js": "#4FC08D",
  MySQL: "#4479A1",
  Flutter: "#02569B",
  Dart: "#0175C2",
  "Node.js": "#339933",
  Express: "#000000",
};

type Props = {
  lang: "en" | "th";
  dict: {
    experience: {
      title: string;
      header: string;
      subheader: string;
      list: Array<{
        label: string;
        title: string;
        company: string;
        period: string;
        link?: string;
        tags: Array<keyof typeof tagIcons | string>;
        details: string[];
      }>;
    };
  };
};

export default function ExperienceSection({ dict }: Props) {
  const { experience: eDict } = dict;

  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-[5vw] py-24 md:py-32 overflow-hidden border-t border-neutral-100 dark:border-neutral-900"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-neutral-400 mb-6 font-sans">
          {eDict.title}
        </p>

        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-neutral-900 dark:text-white mb-20 leading-tight font-sans">
          {eDict.header}
          <br />
          <span className="text-neutral-400 font-normal font-sans italic">
            {eDict.subheader}
          </span>
        </h2>

        <div className="space-y-0">
          {eDict.list.map((exp, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
            >
              <div className="lg:col-span-3 flex flex-col gap-4 relative">
                <div className="flex items-center gap-3 z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white transition-transform duration-300 group-hover:scale-150 flex-shrink-0" />
                  <span className="text-[11px] tracking-widest uppercase text-neutral-400 font-sans">
                    {exp.label}
                  </span>
                </div>

                <span className="text-sm text-neutral-500 font-sans tabular-nums pl-5">
                  {exp.period}
                </span>

                {i < eDict.list.length - 1 && (
                  <div className="absolute left-[3px] top-2 w-[1px] h-full bg-neutral-200 dark:bg-neutral-800 z-0" />
                )}
              </div>

              <div className="lg:col-span-9 pb-20">
                <div className="space-y-8 max-w-[70ch]">
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-3 text-3xl md:text-4xl font-medium text-neutral-900 dark:text-white font-sans transition-colors hover:text-neutral-500 dark:hover:text-neutral-300 leading-snug"
                        >
                          {exp.title}
                          <FiExternalLink
                            className="w-6 h-6 text-neutral-400 group-hover/link:text-neutral-900 dark:group-hover/link:text-white transition-colors"
                            strokeWidth={1.5}
                          />
                        </a>
                      ) : (
                        <h3 className="text-3xl md:text-4xl font-medium text-neutral-900 dark:text-white font-sans transition-colors group-hover:text-neutral-600 dark:group-hover:text-neutral-400 leading-snug">
                          {exp.title}
                        </h3>
                      )}
                    </div>
                    <p className="text-lg md:text-xl text-neutral-400 font-sans">
                      {exp.company}
                    </p>
                  </div>

                  <ul className="space-y-4">
                    {exp.details.map((detail, j) => (
                      <li
                        key={j}
                        className="flex gap-4 text-base md:text-lg text-neutral-500 leading-relaxed font-sans font-light"
                      >
                        <span className="mt-3.5 w-4 h-[1px] bg-neutral-200 dark:bg-neutral-800 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {exp.link && <GithubReadmePreview githubUrl={exp.link} />}

                  <div className="flex flex-wrap gap-3 pt-4">
                    {exp.tags.map((tag) => {
                      const Icon = tagIcons[tag as keyof typeof tagIcons];
                      const color = tagColors[tag as keyof typeof tagIcons];
                      return (
                        <span
                          key={tag}
                          className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-sans hover:border-neutral-400 dark:hover:border-neutral-600 transition-all group/tag"
                        >
                          {Icon && (
                            <Icon
                              size={14}
                              style={{ color }}
                              className="flex-shrink-0 transition-transform group-hover/tag:scale-110"
                            />
                          )}
                          <span className="text-xs font-medium">{tag}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}