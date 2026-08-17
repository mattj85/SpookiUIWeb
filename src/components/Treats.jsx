import { Row, Col } from 'reactstrap'
import Section from './Section.jsx'
import { TREATS, SEASONAL_TREATS } from '../data/content.js'

export default function Treats() {
  return (
    <Section
      id="treats"
      eyebrow="Treats"
      title="Fun background shaders — that stay out of your way"
      lede="Nostalgic, animated GLSL shaders behind your terminal grid. All off by default, one at a time, tuned so your text always stays legible."
      className="section--treats"
    >
      <Row className="g-3">
        {TREATS.map((t) => (
          <Col sm="6" lg="4" key={t.name}>
            <div className="treat">
              <div className="treat__name">{t.name}</div>
              <div className="treat__desc">{t.desc}</div>
            </div>
          </Col>
        ))}
      </Row>

      <h3 className="treats__subhead">Seasonal packs</h3>
      <Row className="g-3">
        {SEASONAL_TREATS.map((t) => (
          <Col sm="6" lg="3" key={t.name}>
            <div className="treat treat--seasonal">
              <span className="treat__season">{t.season}</span>
              <div className="treat__name">{t.name}</div>
              <div className="treat__desc">{t.desc}</div>
            </div>
          </Col>
        ))}
      </Row>

      <div className="treats__foot">
        Every treat composites additively through a tight luminance mask, so only the darkest
        background pixels are tinted — your text, cursor and borders are left alone. A single
        vibrancy control fades the effect up or down, and animation is focus-only — unfocused
        windows show the plain terminal, or dim and desaturate if you enable “dim unfocused”. Any{' '}
        <code>custom-shader-animation</code> you had set is borrowed, not taken: it is stashed on the
        first treat and put back once none of SpookiUI’s shaders are left.
      </div>
    </Section>
  )
}
