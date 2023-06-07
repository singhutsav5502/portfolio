import { useState } from 'react'
import { gsap } from 'gsap'
import Nav from './components/nav/nav'
import Hero from './components/hero/hero'
import Skills from './components/skills/skills'
import './App.css'
function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Skills />
    </>
  )
}

export default App
