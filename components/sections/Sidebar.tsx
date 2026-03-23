"use client";
import { Home, User, Code2, Briefcase, Languages, Mail } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { id: "hero", icon: Home, dictKey: "home" },
  { id: "about", icon: User, dictKey: "about" },
  { id: "skills", icon: Code2, dictKey: "skills" },
  { id: "experience", icon: Briefcase, dictKey: "experience" },
  { id: "contact", icon: Mail, dictKey: "contact" },
] as const;

type Locale = "th" | "en";

type SidebarProps = {
  dict: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    contact: string;
  };
  lang: Locale;
};

export default function Sidebar({ dict, lang }: SidebarProps) {
  const active = useActiveSection();
  const router = useRouter();
  const pathname = usePathname();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLocale = () => {
    const nextLang: Locale = lang === "th" ? "en" : "th";
    const segments = pathname.split("/");
    segments[1] = nextLang;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <aside className="fixed left-0 top-0 h-screen z-50 flex flex-col bg-white dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 w-[56px] lg:w-[220px] transition-all duration-200">
      {/* Header */}
      <div className="px-4 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-center lg:justify-start overflow-hidden">
        <span className="font-medium text-sm hidden lg:block">Tor</span>
        <span className="font-bold text-sm lg:hidden">T</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-2 flex flex-col gap-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <div key={item.id} className="relative group">
              <button
                onClick={() => scrollTo(item.id)}
                className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg w-full transition-colors text-[13px] text-left justify-center lg:justify-start ${
                  isActive
                    ? "bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white font-medium"
                    : "text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                }`}
              >
                <Icon size={15} className="flex-shrink-0" />
                <span className="hidden lg:block">
                  {dict[item.dictKey as keyof typeof dict]}
                </span>
              </button>

              {/* Tooltip Mobile*/}
              <div className="lg:hidden pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 rounded-md bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
                {dict[item.dictKey as keyof typeof dict]}
                <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-neutral-900 dark:border-r-neutral-100" />
              </div>
            </div>
          );
        })}
      </nav>

      {/* Language toggle */}
      <div className="p-2 border-t border-neutral-200 dark:border-neutral-800">
        <div className="relative group">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg w-full text-[13px] text-left justify-center lg:justify-start text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            aria-label="Toggle language"
          >
            <Languages size={15} className="flex-shrink-0" />
            <span className="hidden lg:flex items-center gap-1.5">
              <span
                className={`text-xs font-medium px-1.5 py-0.5 rounded transition-colors ${lang === "th" ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white" : "text-neutral-400"}`}
              >
                TH
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">/</span>
              <span
                className={`text-xs font-medium px-1.5 py-0.5 rounded transition-colors ${lang === "en" ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white" : "text-neutral-400"}`}
              >
                EN
              </span>
            </span>
          </button>

          {/* Tooltip Mobile */}
          <div className="lg:hidden pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 rounded-md bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
            {lang === "th" ? "Switch to EN" : "เปลี่ยนเป็น TH"}
            <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-neutral-900 dark:border-r-neutral-100" />
          </div>
        </div>
      </div>
    </aside>
  );
}
