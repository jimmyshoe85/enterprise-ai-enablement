import Link from "next/link";

const links = [
  { key: "start", href: "/#start", label: "Start here" },
  { key: "direction", href: "/#direction", label: "Direction" },
  { key: "lanes", href: "/#lanes", label: "Lanes" },
  { key: "ecosystem", href: "/ecosystem", label: "How it works" },
  { key: "academy", href: "/academy", label: "AI Academy" },
];

export default function SiteHeader({ current }: { current?: string }) {
  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="Enterprise AI Enablement home">
        <span className="brand-copy"><img className="brand-logo" src="/miller-logo-white.png" alt="Miller" /><small>ENTERPRISE AI ENABLEMENT</small></span>
      </Link>
      <nav className="topnav" aria-label="Primary navigation">
        {links.map((link) => (
          <Link
            key={link.key}
            className={current === link.key ? "current" : undefined}
            href={link.href}
            aria-current={current === link.key ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="edition">INTERNAL WORKING VIEW<br /><strong>NOT FOR DISTRIBUTION</strong></div>
    </header>
  );
}
