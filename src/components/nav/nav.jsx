import './nav.css'
const Nav = () => {
    return (
        <>
            <div className="nav-container">
                <div className="nav-logo">
                    <h4>utsav</h4>
                </div>
                <div className="nav-current-status">
                    <h4>Constantly Learning</h4>
                </div>
                <div className="nav-link-container">
                    <a href="#">Projects,<span className="nav-link-line"></span></a>

                    <a href="#">About<span className="nav-link-line"></span></a>
                </div>
                <div className="nav-mail-container">
                    <a href="#">hello@utsav.com</a>
                </div>
            </div>
        </>
    )
}

export default Nav;