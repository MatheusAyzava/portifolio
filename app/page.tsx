import Image from "next/image";
import Link from "next/link";
import { ArrowRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/FadeIn";
import TechRadar from "@/components/TechRadar";
import TechScroller from "@/components/TechScroller";
import Timeline from "@/components/Timeline";
import Typewriter from "@/components/Typewriter";
import { site } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <FadeIn className="hero">
        <div className="hero-text">
          <p>{site.greeting}</p>
          <Typewriter words={site.typewriterWords} />
          <p>{site.tagline}</p>
          <div className="hero-actions">
            <Link href="/projetos" className="btn">
              Projetos <ArrowRight size={18} weight="bold" />
            </Link>
            <a href={site.cvPath} download className="btn btn-outline">
              CV <DownloadSimple size={18} weight="bold" />
            </a>
          </div>
        </div>
        <div className="hero-img">
          <Image
            src={site.avatar}
            alt={site.name}
            width={300}
            height={300}
            className="profile-img"
            priority
          />
        </div>
      </FadeIn>

      <TechScroller />
      <TechRadar />
      <Timeline />
    </>
  );
}
