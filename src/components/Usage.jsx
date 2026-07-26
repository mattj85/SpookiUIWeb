import { useState } from 'react'
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Table } from 'reactstrap'
import Section from './Section.jsx'
import CodeBlock from './CodeBlock.jsx'
import { KEYS, CLI_EXAMPLES } from '../data/content.js'

export default function Usage() {
  const [tab, setTab] = useState('tui')

  return (
    <Section
      id="usage"
      eyebrow="How to use"
      title="Drive it interactively — or script every last bit"
      lede="Launch the curses TUI for a guided, previewed experience, or use the exact same core logic non-interactively from the CLI."
    >
      <Nav pills className="usage__tabs">
        <NavItem>
          <NavLink
            href="#"
            active={tab === 'tui'}
            onClick={(e) => {
              e.preventDefault()
              setTab('tui')
            }}
          >
            Interactive TUI
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            active={tab === 'cli'}
            onClick={(e) => {
              e.preventDefault()
              setTab('cli')
            }}
          >
            Scriptable CLI
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={tab} className="usage__content">
        <TabPane tabId="tui">
          <Row className="g-4 align-items-start">
            <Col lg="5">
              <div className="prose">
                <p>
                  Run <code>./spookiui.py</code> to open the terminal UI. It’s a three-pane layout —
                  categories, options and a live detail pane — with modal editors typed to each kind
                  of option.
                </p>
                <p className="prose__quiet">
                  Booleans toggle instantly; enums, fonts and themes open searchable pickers with
                  live preview; bounded numbers get visual sliders; and keybindings use a guided
                  builder that validates before adding.
                </p>
              </div>
            </Col>
            <Col lg="7">
              <div className="keytable">
                <Table borderless className="mb-0">
                  <tbody>
                    {KEYS.map((k) => (
                      <tr key={k.key}>
                        <td className="keytable__key">
                          <kbd>{k.key}</kbd>
                        </td>
                        <td className="keytable__action">{k.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="cli">
          <Row className="g-4">
            <Col lg="6">
              <p className="prose__quiet mb-3">
                Everything the TUI does is available non-interactively — perfect for dotfiles,
                scripts and pre-commit hooks.
              </p>
              {CLI_EXAMPLES.map((ex) => (
                <div className="cli-example" key={ex.cmd}>
                  <CodeBlock label="shell">{ex.cmd}</CodeBlock>
                  <p className="cli-example__note">{ex.note}</p>
                </div>
              ))}
            </Col>
            <Col lg="6">
              <div className="prose mb-3">
                <p>The full command surface:</p>
              </div>
              <CodeBlock label="spookiui --help">{`list [category]     list options (＊ = changed)
get   <key>         print an option’s value
doc   <key>         show docs + valid choices
set   <key> <val>…  write + reload live
reset --yes         restore all Ghostty defaults
profile save|load|toggle
doctor              health-check the config
fix-ssh             fix garbled SSH sessions
treats enable|disable|only|clear
reload              trigger a live reload
validate            validate the current config
themes | fonts | path`}</CodeBlock>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Section>
  )
}
