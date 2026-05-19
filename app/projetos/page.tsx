import Link from "next/link";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/FadeIn";
import GitHubReposLoader from "@/components/GitHubReposLoader";
import { site } from "@/lib/data";

export default function ProjetosPage() {
  const main = site.mainProject;

  return (
    <FadeIn className="page-section">
      <h2 className="section-title section-title-left">Case Principal</h2>

      <div className="card">
        <div className="project-header">
          <div>
            <h3>{main.name}</h3>
            <p className="accent-text">{main.subtitle}</p>
          </div>
          <Link
            href={main.url}
            target="_blank"
            className="btn"
            style={{ padding: "0.6rem 1.2rem", fontSize: "0.9rem" }}
          >
            Acessar <ArrowSquareOut size={18} weight="bold" />
          </Link>
        </div>

        <p>{main.description}</p>

        <div className="grid-2" style={{ gap: "1.5rem", marginTop: "2rem" }}>
          <div>
            <h4 className="accent-text" style={{ marginBottom: "0.5rem" }}>
              Backend & Dados
            </h4>
            <ul className="list-disc">
              {main.backend.map((item) => (
                <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>
          <div>
            <h4 className="accent-text" style={{ marginBottom: "0.5rem" }}>
              Frontend (SPA)
            </h4>
            <ul className="list-disc">
              {main.frontend.map((item) => (
                <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>
        </div>

        <div className="tech-stack">
          {main.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      <h3 className="subsection-title">Projetos Online</h3>
      <div className="grid-2">
        {site.projects.map((project) => (
          <Link key={project.name} href={project.url} target="_blank">
            <div className="card" style={{ opacity: 0.9, height: "100%" }}>
              <h4>{project.name}</h4>
              <p className="muted-xs">{project.description}</p>
              <div className="tech-stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <GitHubReposLoader />
    </FadeIn>
  );
}
