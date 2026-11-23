import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/content/site-content";
import { Phone } from "./icons";
import { MobileMenu } from "./mobile-menu";

export const headerLinks = [["Treatments", "/#treatments"], ["Approach", "/#approach"], ["Mobile", "/services/mobile-massage-sydney"], ["About", "/about"], ["Pricing", "/#pricing"]] as const;

export function Header() {
  return <header className="site-header">
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="shell-wide header-inner">
      <Link className="brand" href="/" aria-label="Balance With Maksym home"><Image src="/images/balance-with-maksym-logo-transparent.png" alt="Balance With Maksym logo" width={68} height={62} priority /><span><strong>Balance With Maksym</strong><small>Therapeutic Massage · Sydney</small></span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{headerLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <a className="header-call" href={siteContent.business.phoneHref} aria-label={`Call Maksym on ${siteContent.business.phoneDisplay}`}><Phone /><span>{siteContent.business.phoneDisplay}</span></a>
      <Link className="button button-small header-cta" href="/#appointment">Request appointment</Link>
      <MobileMenu links={headerLinks} />
    </div>
  </header>;
}
