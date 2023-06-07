import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import './nav.css'
const NavD = () => {
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
                <div className="nav-container dark" >
                    <div className="nav-logo dark">
                        <h4>utsav</h4>
                    </div>
                    <div className="nav-current-status dark">
                        <p>crafting immersive web experiences.</p>
                    </div>
                    <div className="nav-link-container dark">
                        <a href="#"><p className='dark'>Projects,</p>  <span className="nav-link-line dark"></span></a>

                        <a href="#"><p className='dark'>About</p><span className="nav-link-line dark"></span></a>
                    </div>
                    <div className="nav-mail-container dark">
                        <a href="mailto:singhutsavofficial@gmail.com"><p className='dark'>hello@utsav.com</p>
                            <span id="mail-line-1" className='dark'></span>
                            <span id="mail-line-2" className='dark'></span>
                        </a>

                    </div>
                </div>
        </>
    )
}

export default NavD;