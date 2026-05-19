"use client";

import { Book } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { repoDescriptions, repoLanguages, site } from "@/lib/data";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  updated_at: string;
};

type RepoWithLangs = Repo & { languages: string[] };

const langColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  Markdown: "#8b949e",
};

/** Ordem de exibição: linguagens "de stack" antes de marcador genérico. */
const langPriority: Record<string, number> = {
  TypeScript: 0,
  Python: 1,
  Java: 2,
  JavaScript: 3,
  HTML: 4,
  CSS: 5,
  Markdown: 6,
};

function topLanguages(
  bytes: Record<string, number>,
  max = 3
): string[] {
  const entries = Object.entries(bytes);
  if (entries.length === 0) return [];

  const total = entries.reduce((sum, [, n]) => sum + n, 0);
  return entries
    .filter(([, n]) => n / total >= 0.04)
    .sort((a, b) => {
      const shareDiff = b[1] - a[1];
      if (Math.abs(shareDiff) > total * 0.08) return shareDiff;
      return (langPriority[a[0]] ?? 99) - (langPriority[b[0]] ?? 99);
    })
    .slice(0, max)
    .map(([name]) => name);
}

async function fetchLanguageBytes(repoName: string): Promise<Record<string, number>> {
  const res = await fetch(
    `https://api.github.com/repos/${site.githubUser}/${repoName}/languages`,
    { headers: { Accept: "application/vnd.github+json" } }
  );
  if (!res.ok) return {};
  return (await res.json()) as Record<string, number>;
}

async function resolveLanguages(repo: Repo): Promise<string[]> {
  try {
    const bytes = await fetchLanguageBytes(repo.name);
    const fromApi = topLanguages(bytes);
    if (fromApi.length > 0) return fromApi;
  } catch {
    /* fallback */
  }

  const fallback = repoLanguages[repo.name];
  if (fallback?.length) return fallback;
  if (repo.language) return [repo.language];
  return [];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function LanguageBadge({ language }: { language: string }) {
  return (
    <span
      className="lang-dot"
      style={
        {
          "--lang-color": langColors[language] ?? "#8b949e",
        } as CSSProperties
      }
    >
      {language}
    </span>
  );
}

export default function GitHubRepos() {
  const [repos, setRepos] = useState<RepoWithLangs[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${site.githubUser}/repos?sort=updated&per_page=12`,
          { headers: { Accept: "application/vnd.github+json" } }
        );
        const data = (await res.json()) as Repo[];
        if (!Array.isArray(data) || cancelled) return;

        const withLanguages = await Promise.all(
          data.map(async (repo) => ({
            ...repo,
            languages: await resolveLanguages(repo),
          }))
        );

        if (!cancelled) setRepos(withLanguages);
      } catch {
        /* mantém vazio */
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="github-section">
      <div className="github-header">
        <p className="github-title">GITHUB_REPOS -- LIVE</p>
        <p className="github-cmd">
          <span>$</span> curl api.github.com/users/{site.githubUser}/repos
        </p>
      </div>
      <div className="repos-grid">
        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="repo-card" style={{ opacity: 0.5 }}>
              <p className="repo-name">carregando...</p>
            </div>
          ))}
        {!loading &&
          repos.map((repo) => (
            <Link key={repo.id} href={repo.html_url} target="_blank">
              <article className="repo-card">
                <div className="repo-card-top">
                  <Book size={16} />
                  <h4 className="repo-name">{repo.name}</h4>
                </div>
                <p className="repo-desc">
                  {repo.description ||
                    repoDescriptions[repo.name] ||
                    "Sem descricao"}
                </p>
                <div className="repo-footer">
                  <div className="repo-langs">
                    {repo.languages.length > 0 ? (
                      repo.languages.map((lang) => (
                        <LanguageBadge key={lang} language={lang} />
                      ))
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                  <time dateTime={repo.updated_at}>
                    {formatDate(repo.updated_at)}
                  </time>
                </div>
              </article>
            </Link>
          ))}
      </div>
    </section>
  );
}
