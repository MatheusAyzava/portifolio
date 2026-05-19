import {
  Briefcase,
  ChartLineUp,
  Cloud,
  Code,
  GraduationCap,
  Translate,
} from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/FadeIn";
import { site } from "@/lib/data";

const interestIcons = {
  chart: ChartLineUp,
  cloud: Cloud,
  code: Code,
  translate: Translate,
};

export default function SobrePage() {
  const { about } = site;

  return (
    <FadeIn className="page-section">
      <h2 className="section-title section-title-left">
        Background Profissional
      </h2>

      <div className="grid-2">
        <div className="card">
          <h3>
            <Briefcase size={24} style={{ verticalAlign: "middle" }} />{" "}
            Experiência
          </h3>
          <p className="muted" style={{ marginBottom: "1rem" }}>
            {about.experience.period}
          </p>
          <h4 style={{ marginBottom: "0.5rem" }}>{about.experience.role}</h4>
          <p>
            <strong>{about.experience.company}</strong>
          </p>
          <p className="muted-sm" style={{ marginTop: "1rem" }}>
            {about.experience.text}
          </p>
        </div>

        <div className="card">
          <h3>
            <GraduationCap size={24} style={{ verticalAlign: "middle" }} />{" "}
            Formação
          </h3>
          <p className="muted" style={{ marginBottom: "1rem" }}>
            {about.education.period}
          </p>
          <h4 style={{ marginBottom: "0.5rem" }}>{about.education.role}</h4>
          <p>
            <strong>{about.education.company}</strong>
          </p>
          <p className="muted-sm" style={{ marginTop: "1rem" }}>
            {about.education.text}
          </p>
        </div>
      </div>

      <div style={{ marginTop: "4rem" }}>
        <h3 style={{ marginBottom: "1.5rem" }}>Hard Skills</h3>
        <div className="card">
          <p>{about.hardSkillsText}</p>
          <div className="tech-stack" style={{ marginTop: "2rem" }}>
            {about.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1.5rem" }}>Interesses Pessoais</h3>
        <div className="grid-2">
          {about.interests.map((item) => {
            const Icon = interestIcons[item.icon];
            return (
              <div key={item.title} className="card interest-card">
                <h4 style={{ marginBottom: "0.5rem" }}>
                  <Icon size={20} style={{ verticalAlign: "middle" }} />{" "}
                  {item.title}
                </h4>
                <p className="muted-xs">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </FadeIn>
  );
}
