import { Container, Row, Col, Button } from 'reactstrap'
import { REPO_URL, GHOSTTY_URL, VERSION } from '../data/content.js'

export default function CtaFooter() {
  return (
    <>
      <section className="cta">
        <Container>
          <div className="cta__inner">
            <h2 className="cta__title">
              <span className="grad-text">Make Ghostty yours</span> — live.
            </h2>
            <p className="cta__lede">
              Clone the repo and run one command. No dependencies, no build step, and every change
              validated and reversible.
            </p>
            <div className="cta__actions">
              <Button color="primary" size="lg" href={REPO_URL} target="_blank" rel="noreferrer">
                Get SpookiUI on GitHub ↗
              </Button>
              <Button color="secondary" outline size="lg" href="#install">
                Installation guide
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <footer className="footer">
        <Container>
          <Row className="align-items-center g-3">
            <Col md="6">
              <div className="footer__brand">
                <span aria-hidden="true">👻</span> SpookiUI
              </div>
              <p className="footer__meta">
                A live configurator for the{' '}
                <a href={GHOSTTY_URL} target="_blank" rel="noreferrer">
                  Ghostty
                </a>{' '}
                terminal. MIT licensed · v{VERSION}
              </p>
            </Col>
            <Col md="6" className="text-md-end">
              <nav className="footer__links">
                <a href={REPO_URL} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={`${REPO_URL}#readme`} target="_blank" rel="noreferrer">
                  Documentation
                </a>
                <a href={`${REPO_URL}/releases`} target="_blank" rel="noreferrer">
                  Releases
                </a>
                <a href={GHOSTTY_URL} target="_blank" rel="noreferrer">
                  Ghostty
                </a>
              </nav>
              <p className="footer__credit">
                Not affiliated with the Ghostty project. Built with React &amp; reactstrap.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}
