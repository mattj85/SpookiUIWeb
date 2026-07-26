import { Container, Row, Col, Button, Badge } from 'reactstrap'
import TerminalWindow from './TerminalWindow.jsx'
import { REPO_URL, GHOSTTY_URL, VERSION, HIGHLIGHTS } from '../data/content.js'

// A compact, stylised recreation of the SpookiUI TUI for the hero.
function TuiPreview() {
  const categories = [
    'Colors & Theme',
    'Font',
    'Cursor',
    'Window',
    'Keybindings',
    'macOS',
    'Treats',
  ]
  const options = [
    { name: 'theme', changed: true },
    { name: 'background', changed: false },
    { name: 'background-opacity', changed: true },
    { name: 'font-family', changed: false },
    { name: 'cursor-style', changed: false },
  ]

  return (
    <TerminalWindow title="spookiui" className="hero__term">
      <div className="tui">
        <div className="tui__header">
          <span>SpookiUI · live Ghostty configurator</span>
          <span className="tui__status">AUTO-APPLY:ON · live</span>
        </div>
        <div className="tui__grid">
          <ul className="tui__col tui__cats">
            {categories.map((c, i) => (
              <li key={c} className={i === 0 ? 'is-active' : ''}>
                {c}
              </li>
            ))}
          </ul>
          <ul className="tui__col tui__opts">
            {options.map((o, i) => (
              <li key={o.name} className={i === 0 ? 'is-active' : ''}>
                <span className={`tui__bullet ${o.changed ? 'is-changed' : ''}`}>●</span>
                {o.name}
              </li>
            ))}
          </ul>
          <div className="tui__col tui__detail">
            <div className="tui__key">theme</div>
            <div>
              <span className="tui__label">type:</span> theme
            </div>
            <div>
              <span className="tui__label">value:</span>{' '}
              <span className="tui__val">Catppuccin Mocha</span>
            </div>
            <div>
              <span className="tui__label">changed:</span> yes
            </div>
            <div className="tui__swatches" aria-hidden="true">
              {['#f38ba8', '#fab387', '#f9e2af', '#a6e3a1', '#94e2d5', '#89b4fa', '#cba6f7', '#f5c2e7'].map(
                (hex) => (
                  <span key={hex} style={{ background: hex }} />
                ),
              )}
            </div>
            <div className="tui__docs">Set the color scheme applied to the terminal…</div>
          </div>
        </div>
        <div className="tui__footer">
          ↑↓ category · →/Enter options · / search · a auto-apply · ? help · q quit
        </div>
      </div>
    </TerminalWindow>
  )
}

export default function Hero() {
  return (
    <header id="top" className="hero">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg="6">
            <Badge className="hero__badge" pill>
              v{VERSION} · Python · MIT
            </Badge>
            <h1 className="hero__title">
              A <span className="grad-text">live configurator</span> for the Ghostty terminal
            </h1>
            <p className="hero__lede">
              Browse and edit <em>every</em> option Ghostty supports from an interactive terminal
              UI — and watch your changes apply <strong>live</strong>. Run it inside a Ghostty
              window and the very terminal you are in repaints as you type.
            </p>
            <div className="hero__actions">
              <Button color="primary" size="lg" href="#install" className="hero__cta">
                Get started
              </Button>
              <Button
                color="secondary"
                outline
                size="lg"
                href={REPO_URL}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub ↗
              </Button>
            </div>
            <p className="hero__note">
              Requires Python 3.8+ (standard library only) and{' '}
              <a href={GHOSTTY_URL} target="_blank" rel="noreferrer">
                Ghostty
              </a>{' '}
              on your <code>PATH</code>. macOS &amp; Linux.
            </p>
          </Col>
          <Col lg="6">
            <TuiPreview />
          </Col>
        </Row>

        <Row className="hero__stats g-3">
          {HIGHLIGHTS.map((h) => (
            <Col xs="6" md="3" key={h.label}>
              <div className="stat">
                <div className="stat__value">{h.value}</div>
                <div className="stat__label">{h.label}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </header>
  )
}
