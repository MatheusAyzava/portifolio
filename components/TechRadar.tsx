"use client";

import { Binoculars, CheckCircle, Flask } from "@phosphor-icons/react";
import FadeIn from "./FadeIn";
import { site } from "@/lib/data";

const icons = {
  adopt: CheckCircle,
  trial: Flask,
  assess: Binoculars,
};

const classes = {
  adopt: "adopt",
  trial: "trial",
  assess: "assess",
} as const;

export default function TechRadar() {
  const entries = [
    { key: "adopt" as const, data: site.radar.adopt },
    { key: "trial" as const, data: site.radar.trial },
    { key: "assess" as const, data: site.radar.assess },
  ];

  return (
    <FadeIn className="radar-section">
      <h2 className="section-title">Tech Radar</h2>
      <div className="radar-grid">
        {entries.map(({ key, data }) => {
          const Icon = icons[key];
          return (
            <div key={key} className={`radar-card ${classes[key]}`}>
              <div className="radar-header">
                <Icon
                  size={24}
                  weight="duotone"
                  color={
                    key === "adopt"
                      ? "#ffffff"
                      : key === "trial"
                        ? "#888888"
                        : "#666666"
                  }
                />
                <h3>{data.title}</h3>
              </div>
              <p className="radar-desc">{data.desc}</p>
              <div className="radar-tags">
                {data.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </FadeIn>
  );
}
