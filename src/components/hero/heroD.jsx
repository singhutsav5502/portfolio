import './hero.css';
import { useLayoutEffect, useRef } from 'react';



const HeroD = () => {

    useLayoutEffect(() => {
        const blob = document.getElementById("blob");
        document.body.onpointermove = event => {
            const { clientX, clientY } = event;
            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 3000, fill: "forwards" });
            // blob.style.left = `${clientX}px`;
            // blob.style.top = `${clientY}px`;
            // blob.style.setProperty('--mouse-x' , `${clientX}px`)
            // blob.style.setProperty('--mouse-y' , `${clientY}px`)
        }
    })
    return (
        <>
            <div className="hero-over-container">
                <div className="hero-back" ></div>
                <div className="hero-container dark">
                    <div className="hero-title-container dark">
                        <h1 className="hero-title dark">UTSAV SINGH</h1>
                        <h1 className="hero-title-2 dark">WEB DEVELOPER</h1>
                    </div>
                    <div className='hero-subtitle dark'>
                        <p>  I bring ideas to life With a keen eye for design and a dedication to clean code, and turn them into pixel-perfect realities.</p>
                    </div>
                    <div className="hero-call-to-action-container dark">
                        <a href="mailto:singhutsavofficial@gmail.com" alt="" className="hero-call-to-action dark">hello@utsav.com  <p className="hero-call-to-action2 dark">Contact Me!</p></a>

                    </div>
                </div>
                <a href="#">
                    <svg className="arrows dark">

                        <path className="a1" d="M0 0 L30 32 L60 0"></path>
                    </svg>
                </a>
                <div className="hero-radial-overlay" id="blob"></div>
                <div id="hero-blob-blur"></div>
            </div>

        </>
    )
}
export default HeroD;
