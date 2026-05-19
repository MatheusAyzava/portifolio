import { site } from "@/lib/data";

export default function TechScroller() {
  const items = [...site.techScroller, ...site.techScroller, ...site.techScroller];

  return (
    <section className="tech-scroller">
      <div className="tech-track">
        {items.map((tech, i) => (
          <span key={`${tech}-${i}`} className="tech-item">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
