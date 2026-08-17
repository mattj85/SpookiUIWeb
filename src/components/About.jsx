import { Row, Col } from 'reactstrap'
import Section from './Section.jsx'
import { LIVE_LOOP, GHOSTTY_URL } from '../data/content.js'

export default function About() {
  return (
    <Section
      id="what"
      eyebrow="What it is"
      title="Ghostty can’t reload on its own. SpookiUI closes the loop."
      lede="Ghostty is configured through a plain-text file and cannot auto-reload when that file changes — you have to trigger a reload yourself. SpookiUI writes the config and triggers the reload for you, so editing feels live."
    >
      <Row className="g-4 align-items-start">
        <Col lg="5">
          <div className="prose">
            <p>
              Every option is discovered <strong>dynamically</strong> from your installed{' '}
              <a href={GHOSTTY_URL} target="_blank" rel="noreferrer">
                Ghostty
              </a>
              , so the tool always matches your version — nothing is hard-coded. On a typical
              machine that’s around 200 options across 13 categories.
            </p>
            <p>
              Options that only apply to the <em>other</em> operating system — macOS-only settings
              on Linux, GTK/X11 settings on macOS — are hidden automatically, so you only ever see
              what’s relevant to the machine you’re on.
            </p>
            <p className="prose__quiet">
              It’s a single Python file with no third-party dependencies. Install it with{' '}
              <code>brew</code>, clone the repo and run it, or drop a <code>spookiui</code> command
              on your <code>PATH</code> with the installer.
            </p>
          </div>
        </Col>
        <Col lg="7">
          <ol className="loop">
            {LIVE_LOOP.map((item, i) => (
              <li className="loop__item" key={item.step}>
                <span className="loop__num">{i + 1}</span>
                <div>
                  <div className="loop__step">{item.step}</div>
                  <div className="loop__detail">{item.detail}</div>
                </div>
              </li>
            ))}
          </ol>
        </Col>
      </Row>
    </Section>
  )
}
