import { Container } from 'reactstrap'

// Consistent section shell: anchor id, eyebrow, heading and lede.
export default function Section({ id, eyebrow, title, lede, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <Container>
        {(eyebrow || title || lede) && (
          <div className="section__head">
            {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
            {title && <h2 className="section__title">{title}</h2>}
            {lede && <p className="section__lede">{lede}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
