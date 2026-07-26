import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Features from './components/Features.jsx'
import Install from './components/Install.jsx'
import Usage from './components/Usage.jsx'
import Treats from './components/Treats.jsx'
import Faq from './components/Faq.jsx'
import CtaFooter from './components/CtaFooter.jsx'

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Features />
        <Install />
        <Usage />
        <Treats />
        <Faq />
        <CtaFooter />
      </main>
    </>
  )
}
