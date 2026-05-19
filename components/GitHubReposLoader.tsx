"use client";

import dynamic from "next/dynamic";

const GitHubRepos = dynamic(() => import("@/components/GitHubRepos"), {
  ssr: false,
  loading: () => (
    <p className="muted" style={{ marginTop: "2rem" }}>
      Carregando repositórios do GitHub...
    </p>
  ),
});

export default function GitHubReposLoader() {
  return <GitHubRepos />;
}
