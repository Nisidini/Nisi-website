
import s from "../Bio/bio.module.css";
import React, { useEffect } from 'react';
import MePic from "../../src/assets/file.png";
import cv from "../../src/assets/Dahamni-CV.pdf"

function Bio(){
    useEffect(() => {
        const nameElement = document.querySelector(`.${s.description}`);
        nameElement.classList.add(s.typingEffect);
    }, []);
    return(
        <>
        <section id="home">
        <div className={s.main}>
            <div className={`${s.description} ${s.typingEffect}`}>
                <div className={s.descrip}>
                <p className={s.greeting}>Hi there I am,</p>
                <h1 className={s.name}>Dahamni Nisidini</h1>
                <h3 className={s.uni}>Software Engineering Undergraduate</h3>
                </div>
                <p className={s.para}>An Undergraduate at University of 
                    Westminster<br></br>(Informatics Institute of Technology(IIT),Sri Lanka)</p>
                <a href={cv} download="Dahamni_Nisidini_CV.pdf" className={s.button}>
                    Download my CV
                </a>

            </div>
            <div className={s.profileImage}>
                <div>
                    <img src={MePic}  className={s.pic}/>
                </div>
            </div>
        </div>
        </section>
        </>
    );
}

export default Bio;