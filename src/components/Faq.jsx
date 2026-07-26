import {
  UncontrolledAccordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap'
import Section from './Section.jsx'
import { FAQ } from '../data/content.js'

export default function Faq() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Questions, answered"
      lede="The things people most often want to know before pointing it at their config."
      className="section--faq"
    >
      <UncontrolledAccordion defaultOpen={['0']} stayOpen className="faq">
        {FAQ.map((item, i) => (
          <AccordionItem key={item.q}>
            <AccordionHeader targetId={String(i)}>{item.q}</AccordionHeader>
            <AccordionBody accordionId={String(i)}>{item.a}</AccordionBody>
          </AccordionItem>
        ))}
      </UncontrolledAccordion>
    </Section>
  )
}
