import { siteContent } from "@/content/site-content";
import { guides } from "@/content/guides";
import Link from "next/link";
import { ArrowUpRight, Phone } from "./icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-mark">Balance <em>With</em> Maksym</p>
          <p className="footer-note">Personalised therapeutic massage for pain relief, recovery and better movement.</p>
        </div>
        <div>
          <p className="footer-heading">Contact</p>
          <a href={siteContent.business.phoneHref}><Phone />{siteContent.business.phoneDisplay}</a>
          <p>Clinic appointments available by arrangement</p>
          <p>Mobile service across Sydney</p>
        </div>
        <div>
          <p className="footer-heading">Follow & reviews</p>
          <a href={siteContent.social.instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight /></a>
          <a href={siteContent.social.facebook} target="_blank" rel="noreferrer">Facebook <ArrowUpRight /></a>
          <a href={siteContent.social.google} target="_blank" rel="noreferrer">Google reviews <ArrowUpRight /></a>
        </div>
        <div>
          <p className="footer-heading">Helpful guides</p>
          {guides.map((guide) => <Link key={guide.slug} href={`/guides/${guide.slug}`}>{guide.title} <ArrowUpRight /></Link>)}
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Balance With Maksym Therapeutic Massage</p>
        <p>Massage does not replace medical diagnosis, medical treatment or physiotherapy.</p>
      </div>
    </footer>
  );
}
