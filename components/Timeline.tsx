import FadeIn from "./FadeIn";
import { site } from "@/lib/data";

export default function Timeline() {
  return (
    <FadeIn className="timeline-section">
      <h2 className="section-title">Minha Jornada</h2>
      <div className="timeline">
        {site.timeline.map((item) => (
          <div
            key={item.title}
            className={`container-t ${item.side === "left" ? "left" : "right"}`}
          >
            <div className="content-t">
              <small style={{ color: "var(--text-muted)" }}>{item.date}</small>
              <h3>{item.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: item.body }} />
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
