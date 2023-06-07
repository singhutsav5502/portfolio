import { useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from './components/nav/nav'
import NavD from './components/nav/navD'
import Hero from './components/hero/hero'
import HeroD from './components/hero/heroD'
import Skills from './components/skills/skills'
import './App.css'
function App() {
  const [isDark, setisDark] = useState(true);
  return (
    <>
      {isDark ? <NavD /> : <Nav />}
      {isDark ? <HeroD /> : <Hero />}
      {/* <Skills /> */}
    </>
  )
}

export default App
