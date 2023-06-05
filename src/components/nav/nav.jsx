import './nav.css'
const Nav = () => {
    return (
        <>
            <div className="nav-container">
                <div className="nav-logo">
                    <h4>utsav</h4>
                </div>
                <div className="nav-current-status">
                    <p>Constantly Learning</p>
                </div>
                <div className="nav-link-container">
                    <a href="#"><p>Projects,</p>  <span className="nav-link-line"></span></a>

                    <a href="#"><p>About</p><span className="nav-link-line"></span></a>
                </div>
                <div className="nav-mail-container">
                    <a href="#"><p>hello@utsav.com</p>
                        <span id="mail-line-1"></span>
                        <span id="mail-line-2"></span>
                    </a>

                </div>
            </div>
        </>
    )
}

export default Nav;