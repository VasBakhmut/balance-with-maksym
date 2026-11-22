"use client";

import Link from "next/link";
import { useState } from "react";

type MobileMenuProps = {
  links: ReadonlyArray<readonly [string, string]>;
};

export function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="menu-button" aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><span /><span /></button>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link className="button" href="/#appointment" onClick={() => setOpen(false)}>Request appointment</Link>
        </nav>
      )}
    </>
  );
}
