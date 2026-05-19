import { site } from "@/lib/data";

export default function Footer({ short = false }: { short?: boolean }) {
  return (
    <footer>
      <p>
        &copy; 2026 {site.name}.
        {!short && " Full-Stack Developer."}
      </p>
    </footer>
  );
}
