import {
  FiArrowUpRight,
  FiGithub,
  FiFileText,
  FiDownload,
} from "react-icons/fi";

type Props = {
  lang: "en" | "th";
  dict: {
    contact: {
      title: string;
      header: string;
      subheader: string;
      description: string;
      email: string;
      phone: string;
      cta: string;
    };
  };
};

export default function ContactSection({ dict }: Props) {
  const { contact: cDict } = dict;

  return (
    <section
      id="contact"
      className="relative flex flex-col justify-center px-6 sm:px-10 md:px-[5vw] py-24 md:py-32 overflow-hidden border-t border-neutral-100 dark:border-neutral-900"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-neutral-400 mb-6 font-sans">
              {cDict.title}
            </p>

            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-neutral-900 dark:text-white mb-6 leading-tight font-sans">
              {cDict.header}
              <br />
              <span className="text-neutral-400 font-normal font-sans italic">
                {cDict.subheader}
              </span>
            </h2>

            <p className="text-neutral-500 font-sans font-light text-base md:text-lg leading-relaxed max-w-[55ch] mb-12">
              {cDict.description}
            </p>
          </div>

          {/* Right */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:items-end mt-8 lg:mt-0">
            <div className="space-y-10 w-full lg:w-auto">
              <div className="group flex flex-col">
                <span className="text-[10px] tracking-widest uppercase text-neutral-400 mb-2 font-sans">
                  Email
                </span>
                <a
                  href={`mailto:${cDict.email}`}
                  className="text-xl md:text-2xl font-medium text-neutral-900 dark:text-white flex items-center gap-2 hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors w-fit pb-1 border-b border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
                >
                  {cDict.email}
                  <FiArrowUpRight className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-neutral-400" />
                </a>
              </div>
              <div className="group flex flex-col">
                <span className="text-[10px] tracking-widest uppercase text-neutral-400 mb-2 font-sans">
                  Phone
                </span>
                <a
                  href={`tel:${cDict.phone}`}
                  className="text-xl md:text-2xl font-medium text-neutral-900 dark:text-white flex items-center gap-2 hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors w-fit pb-1 border-b border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
                >
                  {cDict.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}
                  <FiArrowUpRight className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-neutral-400" />
                </a>
              </div>
              <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-4">
                <a
                  href="https://github.com/imTor1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="p-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800 transition-colors text-neutral-900 dark:text-white">
                    <FiGithub size={18} />
                  </div>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-sans font-medium">
                      View on
                    </span>
                    <span className="text-sm font-semibold font-sans">
                      GitHub
                    </span>
                  </div>
                  <FiArrowUpRight
                    className="ml-1 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-neutral-400"
                    size={12}
                  />
                </a>

                <a
                  href="/resume.pdf"
                  download="Resume_Pakonchai.pdf"
                  className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="p-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800 transition-colors text-neutral-900 dark:text-white">
                    <FiFileText size={18} />
                  </div>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-sans font-medium">
                      Download
                    </span>
                    <span className="text-sm font-semibold font-sans">
                      Resume
                    </span>
                  </div>
                  <FiDownload
                    className="ml-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-neutral-400"
                    size={14}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
