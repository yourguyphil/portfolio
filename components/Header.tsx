"use client";

import { useState } from "react";
import { nav, site } from "@/lib/content";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={close}>
          Philips<span>.</span>
        </a>

        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav id="site-nav" className={`nav ${open ? "open" : ""}`} aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <span className="nav-socials">
            <a href={site.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
            <a href={site.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon />
            </a>
          </span>
        </nav>
      </div>
    </header>
  );
}
