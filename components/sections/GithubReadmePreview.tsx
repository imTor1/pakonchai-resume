"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { FiExternalLink } from "react-icons/fi";

type Props = {
  githubUrl: string;
};

export default function GithubReadmePreview({ githubUrl }: Props) {
  const [readme, setReadme] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReadme = async () => {
      if (!githubUrl.includes("github.com")) return;

      const repoPath = githubUrl.replace("https://github.com/", "").replace(/\/$/, "");
      
      try {
        let res = await fetch(`https://raw.githubusercontent.com/${repoPath}/main/README.md`);
        if (!res.ok) {
          res = await fetch(`https://raw.githubusercontent.com/${repoPath}/master/README.md`);
        }
        
        if (res.ok) {
          let text = await res.text();
          const rawBaseUrl = `https://raw.githubusercontent.com/${repoPath}/main/`;
          text = text.replace(/src="\.\//g, `src="${rawBaseUrl}`);
          text = text.replace(/src="assets\//g, `src="${rawBaseUrl}assets/`);
          
          setReadme(text);
        } else {
          setReadme("> ❌ **README.md Not Found**");
        }
      } catch (error) {
        setReadme("> ❌ **Failed to load data**");
      } finally {
        setLoading(false);
      }
    };

    fetchReadme();
  }, [githubUrl]);

  if (!githubUrl.includes("github.com")) return null;

  return (
    <div className="mt-8 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-[#0d1117] max-w-[70ch]">
      
      <div className="bg-neutral-100 dark:bg-neutral-900 px-4 py-3 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center gap-2 text-[11px] text-neutral-500 font-mono truncate bg-white dark:bg-neutral-950 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          {githubUrl.replace("https://github.com/", "")}
          <FiExternalLink size={12} />
        </a>
      </div>

      <div className="w-full h-[350px] overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700">
        {loading ? (
          <div className="flex h-full items-center justify-center text-sm text-neutral-400 font-sans animate-pulse">
            Fetching README from GitHub...
          </div>
        ) : (
          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none font-sans prose-headings:font-semibold prose-a:text-blue-500 hover:prose-a:text-blue-600 prose-img:rounded-lg">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]} 
              rehypePlugins={[rehypeRaw]}
            >
              {readme}
            </ReactMarkdown>
          </div>
        )}
      </div>
      
    </div>
  );
}