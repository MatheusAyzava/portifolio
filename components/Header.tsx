"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { site } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <Link href="/">{site.brand}</Link>
      </div>
      <button
        type="button"
        className="menu-toggle"
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
      </button>
      <nav className={open ? "active" : ""}>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
