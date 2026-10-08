import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Splash from './components/Splash'
import FloatingActions from './components/FloatingActions'
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

export default function App() {
  return (
    <>
      <Splash />
      <Navbar />
      <main>
        <Hero />
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
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
