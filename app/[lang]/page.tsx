import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import { getDictionary } from "@/lib/getDictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "th" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <main>
      <HeroSection lang={lang} dict={dict.home}/>
      <AboutSection lang={lang} dict={dict}/>
      <SkillsSection lang={lang} dict={dict}/>
      <ExperienceSection lang={lang} dict={dict}/>
      <ContactSection lang={lang} dict={dict}/>
    </main>
  );
}
