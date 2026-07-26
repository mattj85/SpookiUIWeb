import { useEffect, useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  Button,
} from 'reactstrap'
import { NAV_LINKS, REPO_URL } from '../data/content.js'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <Navbar
      fixed="top"
      expand="md"
      className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}
      container="lg"
    >
      <NavbarBrand href="#top" className="site-nav__brand" onClick={close}>
        <span className="site-nav__ghost" aria-hidden="true">
          👻
        </span>
        SpookiUI
      </NavbarBrand>
      <NavbarToggler onClick={() => setOpen(!open)} aria-label="Toggle navigation" />
      <Collapse isOpen={open} navbar>
        <Nav className="ms-auto align-items-md-center" navbar>
          {NAV_LINKS.map((link) => (
            <NavItem key={link.id}>
              <NavLink href={`#${link.id}`} onClick={close}>
                {link.label}
              </NavLink>
            </NavItem>
          ))}
          <NavItem className="ms-md-2 mt-2 mt-md-0">
            <Button
              color="primary"
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="site-nav__cta"
              onClick={close}
            >
              GitHub ↗
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}
