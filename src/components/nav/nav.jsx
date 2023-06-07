import './nav.css'
import { useLayoutEffect , useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Nav = () => {
    useLayoutEffect(() => {

        gsap.to('.nav-container', {
            scrollTrigger: {
                trigger: '#hero',
                start: "50% 50%",
                end: '100% 50%',
                scrub:2,
                pin: false
            },
            top: "0%"
        })
    })
    return (
        <>
            <div className="nav-container">
                <div className="nav-logo">
                    <h4>utsav</h4>
                </div>
                <div className="nav-current-status">
                    <p>crafting immersive web experiences.</p>
                </div>
                <div className="nav-link-container">
                    <a href="#"><p>Projects,</p>  <span className="nav-link-line"></span></a>

                    <a href="#"><p>About</p><span className="nav-link-line"></span></a>
                </div>
                <div className="nav-mail-container">
                    <a href="mailto:singhutsavofficial@gmail.com"><p>hello@utsav.com</p>
                        <span id="mail-line-1"></span>
                        <span id="mail-line-2"></span>
                    </a>

                </div>
            </div>
        </>
    )
}

export default Nav;