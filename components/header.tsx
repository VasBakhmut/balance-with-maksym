"use client";

import Image from "next/image";
import { useState } from "react";

const links = [["Approach", "#approach"], ["Treatments", "#treatments"], ["Mobile", "#mobile"], ["About", "#about"], ["Reviews", "#reviews"], ["Pricing", "#pricing"]] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="shell-wide header-inner">
      <a className="brand" href="#top"><Image src="/images/balance-with-maksym-logo-transparent.png" alt="" width={68} height={62} priority /><span><strong>Balance With Maksym</strong><small>Therapeutic Massage · Sydney</small></span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <a className="button button-small header-cta" href="#appointment">Request appointment</a>
      <button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
    </div>
    {open && <nav className="mobile-nav">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="button" href="#appointment">Request appointment</a></nav>}
  </header>;
}
