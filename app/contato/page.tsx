import Link from "next/link";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/FadeIn";
import { site } from "@/lib/data";

export default function ContatoPage() {
  return (
    <div className="contact-main">
      <FadeIn className="contact-section">
        <h2>{site.contact.headline}</h2>
        <p>{site.contact.subtext}</p>

        <div className="card contact-card">
          <a href={`mailto:${site.email}`} className="btn btn-full">
            <EnvelopeSimple size={22} weight="bold" /> Enviar E-mail
          </a>

          <div className="divider" />

          <p className="social-label">Conecte-se comigo</p>

          <div className="social-grid">
            <Link
              href={site.linkedin}
              target="_blank"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={26} weight="fill" />
            </Link>
            <Link
              href={site.github}
              target="_blank"
              className="social-btn"
              aria-label="GitHub"
            >
              <GithubLogo size={26} weight="fill" />
            </Link>
            <Link
              href={site.whatsapp}
              target="_blank"
              className="social-btn"
              aria-label="WhatsApp"
            >
              <WhatsappLogo size={26} weight="fill" />
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
