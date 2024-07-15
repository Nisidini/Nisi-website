import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import s from "./../NavBar/navBar.module.css";

function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <>
        <div className={s.header}>
            <div className={s.name}> 
                <p>Nisi<span className={s.highlight}>dini</span></p>
            </div>
            <div className={`${s.nav} ${menuOpen ? s.navOpen : ""}`}>
                <Link to="#home" className={s.link} onClick={toggleMenu}>
                    Home
                </Link>
                <Link to="#about" className={s.link} onClick={toggleMenu}>
                    About Me
                </Link>
                <Link to="#projects" className={s.link} onClick={toggleMenu}>
                    Projects
                </Link>
                <Link to="#skills" className={s.link} onClick={toggleMenu}>
                    Skills
                </Link>
                <Link to="#contact" className={s.link} onClick={toggleMenu}>
                    Contact Me
                </Link>
            </div>
            <div className={s.menuIcon} onClick={toggleMenu}>
                ☰
            </div>
        </div>
        </>
    );
}

export default NavBar;
