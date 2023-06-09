import './App.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useState, useLayoutEffect } from 'react'
// import Nav from './components/nav/nav'
import NavD from './components/nav/navD'
// import Hero from './components/hero/hero'
import HeroD from './components/hero/heroD'
import Skills from './components/skills/skills'
import ProjectsScroller from './components/projects/ProjectsScroller'
import About from './components/about/About'
import ProjectsMobile from './components/projects/ProjectsMobile'
gsap.registerPlugin(ScrollTrigger)
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
    if (width > 1180) {
      // NAV SCROLL IN
      gsap.to('.nav-container', {
        scrollTrigger: {
          trigger: '#hero',
          start: "5% 0%",
          end: '5% 2%',
          scrub: 2,
          pin: false
        },
        top: "0%"
      })


      // PROJECTS

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#ProjectsScroller",
          start: "10% 0%",
          end: "100% 80%",
          // markers: true,
          pinSpacing: true,
          scrub: 2,
          pin: true
        }
      })
      tl
        .to("#TextSplit-top", {
          top: "-50%",
        }, 'start')
        .to("#TextSplit-bottom", {
          bottom: "-50%",
        }, 'start')
        .to("#TextSplit-top-h", {
          top: "80%",
        }, 'start')
        .to("#TextSplit-bottom-h", {
          bottom: "-35%",
        }, 'start')
        .to(".TextSplit-content", {
          marginTop: "0%",
        }, 'start')
        .to("#project-image-track", {
          left: "10%",
        }, 'start')



    }
    // SKILL CARDS OPACITY
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "100% 80%",
        end: "100% 82%",
        scrub: 2,
      }
    })
    tl2.to('.skillCard-container', {
      opacity: 1
    });


  })
  const width = window.innerWidth;
  return (
    <>

      <div className="app-container">
        <div className="app-back" ></div>
        {width > 1180 ? <NavD /> : <></>}
        <HeroD />
        <Skills />
        {width > 1180 ? <ProjectsScroller /> : <ProjectsMobile />}
        <About />
        <div className="app-radial-overlay" id="blob"></div>
        <div id="app-blob-blur"></div>
      </div>

    </>
  )
}

export default App
