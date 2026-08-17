import { Row, Col, Card, CardBody } from "reactstrap";
import Section from "./Section.jsx";
import CodeBlock from "./CodeBlock.jsx";
import {
  INSTALL_METHODS,
  MACOS_STEPS,
  HOMEBREW_URL,
  TAP_URL,
} from "../data/content.js";

export default function Install() {
  return (
    <Section
      id="install"
      eyebrow="Install"
      title="Up and running in one command"
      lede="SpookiUI is a single script — no build step, no package manifest, no pip installs. Pick whichever route suits you."
    >
      <Row className="g-4">
        {INSTALL_METHODS.map((m) => (
          <Col lg="4" key={m.title}>
            <Card className="install h-100">
              <CardBody>
                <span className="install__tag">{m.tag}</span>
                <h3 className="install__title">{m.title}</h3>
                <p className="install__body">{m.body}</p>
                <CodeBlock label="shell">{m.code}</CodeBlock>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="brewguide">
        <div className="brewguide__head">
          <h3 className="brewguide__title">
            <span aria-hidden="true">🍎</span> macOS, step by step with Homebrew
          </h3>
          <p className="brewguide__lede">
            From an empty machine to a live-reloading TUI. The formula lives in
            the{" "}
            <a href={TAP_URL} target="_blank" rel="noreferrer">
              mattj85/spookiui tap
            </a>{" "}
            and is installed with{" "}
            <a href={HOMEBREW_URL} target="_blank" rel="noreferrer">
              Homebrew
            </a>
            , which brings its own Python — nothing is added to your system
            Python.
          </p>
        </div>

        <ol className="brewsteps">
          {MACOS_STEPS.map((s, i) => (
            <li className="brewstep" key={s.title}>
              <span className="brewstep__num">{i + 1}</span>
              <div className="brewstep__body">
                <div className="brewstep__title">
                  {s.title}
                  {s.note && <span className="brewstep__note">{s.note}</span>}
                </div>
                <p className="brewstep__detail">{s.detail}</p>
                <CodeBlock label="shell">{s.code}</CodeBlock>
              </div>
            </li>
          ))}
        </ol>

        <p className="brewguide__foot">
          Uninstalling is <code>brew uninstall spookiui</code> (and{" "}
          <code>brew untap mattj85/spookiui</code> to drop the tap). Your Ghostty
          config, backups and saved profiles are left exactly where they are.
        </p>
      </div>

      <div className="install__req">
        <h4 className="install__reqtitle">Requirements</h4>
        <ul>
          <li>
            <strong>Python 3.8+</strong> — standard library only, no third-party
            packages. The Homebrew formula provides its own.
          </li>
          <li>
            The <code>ghostty</code> binary on your <code>PATH</code> (or in{" "}
            <code>/Applications/Ghostty.app</code>).
          </li>
          <li>
            For live reload: Ghostty running, plus{" "}
            <strong>Accessibility</strong> permission on macOS, or{" "}
            <code>pgrep</code> on Linux (present on essentially every distro).
          </li>
        </ul>
      </div>
    </Section>
  );
}
