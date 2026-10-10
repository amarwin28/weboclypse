import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Splash from './components/Splash'
import FloatingActions from './components/FloatingActions'
import JoinModal from './components/JoinModal'
import { JoinModalProvider } from './context/JoinModalContext'
import Hero from './sections/Hero'
import Why from './sections/Why'
import Teach from './sections/Teach'
import Method from './sections/Method'
import Opportunities from './sections/Opportunities'
import Identity from './sections/Identity'
import Projects from './sections/Projects'
import { ForStudents, ForParents, ForSchools } from './sections/Audiences'
import Certification from './sections/Certification'
import Story from './sections/Story'
import Team from './sections/Team'
import FinalCTA from './sections/FinalCTA'
import ContactSection from './sections/ContactSection'

export default function App() {
  // Becomes true only after the splash has faded out; triggers the hero entrance.
  const [introDone, setIntroDone] = useState(false)

  return (
    <JoinModalProvider>
      <Splash onDone={() => setIntroDone(true)} />
      <Navbar />
      <main>
        <Hero play={introDone} />
        <Why />
        <Teach />
        <Method />
        <Opportunities />
        <Identity />
        <Projects />
        <ForStudents />
        <ForParents />
        <ForSchools />
        <Certification />
        <Story />
        <Team />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
      <JoinModal />
    </JoinModalProvider>
  )
}
