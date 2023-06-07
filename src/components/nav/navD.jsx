import './nav.css'
const NavD = () => {
    return (
        <>
            <div className="nav-container dark">
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