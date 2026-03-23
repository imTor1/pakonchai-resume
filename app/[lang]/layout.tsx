// app/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "@/components/sections/Sidebar";
import { getDictionary } from "@/lib/getDictionary";
import { Inter, Prompt } from "next/font/google";

const prompt = Prompt({
  weight: ["400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-prompt",
});
type Locale = "en" | "th";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pakonchai",
  description: "Portfolio website",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = lang as Locale;
  const dict = await getDictionary(currentLang);

  return (
    <html lang={lang} className={`${prompt.variable} ${inter.variable}`}> 
      <body className="flex bg-white dark:bg-neutral-950 font-sans">
        <Sidebar dict={dict.sidebar} lang={currentLang} />
        <main className="flex-1 pl-[56px] lg:pl-[220px] transition-all duration-200">
          {children}
        </main>
      </body>
    </html>
  );
}
