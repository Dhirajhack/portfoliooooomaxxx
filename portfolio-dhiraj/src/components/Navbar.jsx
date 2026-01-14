

import "./Style.css"

function Navbar() {



    return (

        <>
            <div>
                <nav class="navbar">
                    <div class="logo">GURUJI PORTFOLIO</div>

                    <ul class="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li>
                            <a href="/resume.pdf" download className="resume-btn">
                                Resume
                            </a>
                        </li>

                    </ul>
                </nav>

            </div>

        </>
    )

}

export default Navbar;