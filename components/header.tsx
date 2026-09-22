"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteContent } from "@/content/site-content";
import { Phone } from "./icons";

const links = [["Treatments", "/#treatments"], ["Approach", "/#approach"], ["Mobile", "/#mobile"], ["About", "/#about"], ["Pricing", "/#pricing"]] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="shell-wide header-inner">
      <Link className="brand" href="/#top"><Image src="/images/balance-with-maksym-logo-transparent.png" alt="" width={68} height={62} priority /><span><strong>Balance With Maksym</strong><small>Therapeutic Massage · Sydney</small></span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <a className="header-call" href={siteContent.business.phoneHref} aria-label={`Call Maksym on ${siteContent.business.phoneDisplay}`}><Phone /><span>{siteContent.business.phoneDisplay}</span></a>
      <Link className="button button-small header-cta" href="/#appointment">Request appointment</Link>
      <button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
    </div>
    {open && <nav className="mobile-nav">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="button" href="/#appointment">Request appointment</Link></nav>}
  </header>;
}
