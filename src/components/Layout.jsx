import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="navbar">
      <div className="wrap navbar__inner">
        <Link to="/" className="navbar__brand">
          <span className="navbar__dot" />
          Nexora
        </Link>
        <nav className="navbar__links">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 'navbar__link' + (isActive ? ' navbar__link--active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/start-project" className="btn btn--primary navbar__cta">Start a project</Link>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div>
          <div className="navbar__brand footer__brand">
            <span className="navbar__dot" />
            Nexora Technologies
          </div>
          <p className="footer__tag">Innovating Tomorrow, Today.</p>
        </div>
        <div className="footer__links">
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="wrap footer__bottom">
        <p>© {new Date().getFullYear()} Nexora Technologies. All systems operational.</p>
      </div>
    </footer>
  )
}

/* Signature element: an animated "network pulse" — a line of nodes with
   a light pulse travelling along it, used to visually tie sections together
   as "connected systems" rather than decoration for its own sake. */
export function PulseLine({ nodeCount = 5 }) {
  const nodes = Array.from({ length: nodeCount })
  return (
    <div className="pulse-line" aria-hidden="true">
      <div className="pulse-line__track">
        <div className="pulse-line__glow" />
      </div>
      {nodes.map((_, i) => (
        <span key={i} className="pulse-line__node" style={{ left: `${(i / (nodeCount - 1)) * 100}%` }} />
      ))}
    </div>
  )
}
