type Props = {
  lang: "en" | "th";
  dict: {
    about: {
      about: string;
      role: string;
      location: string;
      description: {
        part1: string;
        highlight1: string;
        part2: string;
        highlight2: string;
        part3: string;
        highlight3: string;
      };
      education_title: string;
      education_list: Array<{
        school: string;
        period: string;
        faculty: string;
        major: string;
        gpa: string;
      }>;
    };
  };
};

export default function AboutSection({ dict }: Props) {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-[5vw] py-24 md:py-32 overflow-hidden border-t border-neutral-100 dark:border-neutral-900"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-neutral-400 mb-6 font-sans">
              {dict.about.about}
            </p>

            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-neutral-900 dark:text-white mb-5 leading-[1.15] font-sans">
              {dict.about.role}
              <br />
            </h2>

            <div className="space-y-6 text-neutral-500 text-base md:text-lg leading-[1.7] font-sans max-w-[65ch]">
              <p>
                {dict.about.description.part1}{" "}
                <span className="text-neutral-900 dark:text-white font-medium">
                  {dict.about.description.highlight1}
                </span>
                {dict.about.description.part2}
              </p>
              <p>
                {dict.about.description.part3}{" "}
                <span className="text-neutral-900 dark:text-white font-medium border-b border-neutral-200 dark:border-neutral-800 pb-0.5">
                  {dict.about.description.highlight2}
                </span>{" "}
                {dict.about.description.highlight3}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end lg:pb-2">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-neutral-400 mb-10 font-sans">
              {dict.about.education_title}
            </p>

            <div className="space-y-2">
              {dict.about.education_list.map((edu, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white mt-2 flex-shrink-0 transition-transform group-hover:scale-125" />
                    {i < dict.about.education_list.length - 1 && (
                      <div className="w-px flex-1 bg-neutral-200 dark:bg-neutral-800 mt-3" />
                    )}
                  </div>

                  <div className="pb-10 flex-1">
                    <div className="flex flex-col gap-1 mb-3">
                      <span className="text-[11px] text-neutral-400 font-sans tracking-wider">
                        {edu.period}
                      </span>
                      <h3 className="text-base md:text-lg font-medium text-neutral-900 dark:text-white leading-tight font-sans">
                        {edu.school}
                      </h3>
                    </div>

                    <div className="space-y-1 mb-4">
                      <p className="text-sm text-neutral-500 font-sans">
                        {edu.faculty}
                      </p>
                      <p className="text-sm text-neutral-400 font-sans font-light">
                        {edu.major}
                      </p>
                    </div>

                    <div className="inline-block">
                      <span className="text-[10px] px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 font-medium tracking-tight border border-neutral-200/50 dark:border-neutral-800/50">
                        {edu.gpa}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
