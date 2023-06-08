import { useState, useLayoutEffect } from 'react'
import Nav from './components/nav/nav'
import NavD from './components/nav/navD'
import Hero from './components/hero/hero'
import HeroD from './components/hero/heroD'
import Skills from './components/skills/skills'
import './App.css'
function App() {
  useLayoutEffect(() => {
    const blob = document.getElementById("blob");
    document.body.onpointermove = event => {

      const { pageX, pageY } = event;
      blob.animate({
        left: `${pageX}px`,
        top: `${pageY}px`
      }, { duration: 3000, fill: "forwards" });
    }
  })
  return (
    <>
      <div className="app-back" ></div>
      <div className="app-container">
        {<NavD />}
        {<HeroD />}
        <Skills />
        <div className="app-radial-overlay" id="blob"></div>
        <div id="app-blob-blur"></div>
      </div>
    </>
  )
}

export default App
