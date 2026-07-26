import { Row, Col, Card, CardBody } from 'reactstrap'
import Section from './Section.jsx'
import { FEATURES } from '../data/content.js'

export default function Features() {
  return (
    <Section
      id="features"
      eyebrow="Features"
      title="Powerful where it counts, safe by default"
      lede="A live editing loop wrapped in guardrails — validation, backups and rollback on every single change."
    >
      <Row className="g-4">
        {FEATURES.map((f) => (
          <Col md="6" lg="4" key={f.title}>
            <Card className="feature h-100">
              <CardBody>
                <div className="feature__icon" aria-hidden="true">
                  {f.icon}
                </div>
                <h3 className="feature__title">{f.title}</h3>
                <p className="feature__body">{f.body}</p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Section>
  )
}
