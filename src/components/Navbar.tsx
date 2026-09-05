const links = [["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Experience", "experience"], ["Education", "education"], ["Certifications", "certifications"], ["Achievements", "achievements"], ["Contact", "contact"]];

export function Navbar() {
  return <nav className="site-nav" aria-label="Main navigation"><a className="brand" href="#home" aria-label="Namratha Sanapala home"><span className="brand-mark">NS</span><span>Namratha Sanapala</span></a><div className="nav-links">{links.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div><a className="nav-cta" href="#contact">Contact Me <span aria-hidden="true">✉</span></a></nav>;
}