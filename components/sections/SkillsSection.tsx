import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiPhp,
  SiReact, SiNextdotjs, SiVuedotjs, SiLaravel, SiFlutter,
  SiExpress, SiNodedotjs, SiTailwindcss, SiBootstrap,
  SiGit, SiGithub, SiPostman, SiMysql, SiDbeaver
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

type Props = {
  lang: "en" | "th";
  dict: {
    skills: {
      title: string;
      header: string;
      subheader: string;
      categories: {
        languages: string;
        frameworks: string;
        tools: string;
      };
    };
  };
};

export default function SkillsSection({ dict }: Props) {
  const { skills: sDict } = dict;

  const skillGroups = [
    {
      category: sDict.categories.languages,
      skills: [
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: SiCss, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
      ],
    },
    {
      category: sDict.categories.frameworks,
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      ],
    },
    {
      category: sDict.categories.tools,
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#181717" },
        { name: "VS Code", icon: VscVscode, color: "#007ACC" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "DBeaver", icon: SiDbeaver, color: "#382923" },
      ],
    },
  ];

  return (
    <section 
      id="skills" 
      className="relative min-h-screen px-6 sm:px-10 md:px-[5vw] py-24 flex flex-col justify-center border-t border-neutral-100 dark:border-neutral-900"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-neutral-400 mb-6 font-sans">
          {sDict.title}
        </p>

        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-neutral-900 dark:text-white mb-16 leading-tight font-sans">
          {sDict.header}<br />
          <span className="text-neutral-400 font-normal font-sans">
            {sDict.subheader}
          </span>
        </h2>

        <div className="flex flex-col gap-12">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-neutral-400 mb-8 flex items-center gap-4 font-sans">
                <span className="whitespace-nowrap">{group.category}</span>
                <span className="flex-1 h-px bg-neutral-100 dark:bg-neutral-900" />
              </p>

              <div className="flex flex-wrap gap-3">
                {group.skills.map(({ name, icon: Icon, color }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all cursor-default group"
                  >
                    <Icon 
                      size={14} 
                      style={{ color }} 
                      className="flex-shrink-0 transition-transform group-hover:scale-110" 
                    />
                    <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white font-sans">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}