import { Row, Col, Card, CardBody } from "reactstrap";
import Section from "./Section.jsx";
import CodeBlock from "./CodeBlock.jsx";

const METHODS = [
  {
    tag: "Recommended",
    title: "Run straight from the repo",
    body: "No dependencies beyond the Python 3.8+ standard library. Clone and run.",
    code: `git clone https://github.com/mattj85/SpookiUI.git
cd SpookiUI
spookiui.py`,
  },
  {
    tag: "PATH command",
    title: "Use the installer",
    body: "Checks prerequisites and drops a spookiui command on your PATH.",
    code: `./install.sh                    # installs to ~/.local/bin
PREFIX=/usr/local ./install.sh  # system-wide (may need sudo)`,
  },
  {
    tag: "macOS & Linux",
    title: "Homebrew",
    body: "Once the tap is published, install and upgrade with brew.",
    code: `brew install mattj85/spookiui/spookiui
brew upgrade spookiui`,
  },
];

export default function Install() {
  return (
    <Section
      id="install"
      eyebrow="Install"
      title="Up and running in one command"
      lede="SpookiUI is a single script — no build step, no package manifest, no pip installs. Pick whichever route suits you."
    >
      <Row className="g-4">
        {METHODS.map((m) => (
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

      <div className="install__req">
        <h4 className="install__reqtitle">Requirements</h4>
        <ul>
          <li>
            <strong>Python 3.8+</strong> — standard library only, no third-party
            packages.
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
