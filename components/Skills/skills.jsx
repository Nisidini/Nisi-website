import React from 'react';
import s from "../Skills/skills.module.css";
import reactPic from "../../src/assets/react.png";
import htmlPic from "../../src/assets/html.png";
import cssPic from "../../src/assets/css.png";
import jsPic from "../../src/assets/js.png";
import javaPic from "../../src/assets/java.png";
import pythonPic from "../../src/assets/python.png";
import nodePic from "../../src/assets/nodejs.png";
import mongo from "../../src/assets/mongo.png";
import sql from "../../src/assets/sql.png";
import flask from "../../src/assets/flask.jpg"
function Skills(){
    return(
        <>
        <section id="skills">
        <div className={s.skills}>
            <h1>Technical Skills</h1>
        </div>

        <div className={s.mainCard}>

        <div className={s.card}>
            <div>
                <img src={pythonPic} className={s.logoImage}/>
            </div>
            <div className={s.skillName}>
                <p>Python</p>
            </div>
        </div>

        <div className={s.card}>
            <div>
                <img src={javaPic} className={s.logoImage}/>
            </div>
            <div className={s.skillName}>
                <p>Java</p>
            </div>
        </div>

        <div className={s.card}>
            <div>
                <img src={htmlPic} className={s.logoImage}/>
            </div>
            <div className={s.skillName}>
                <p>HTML</p>
            </div>
        </div>

        <div className={s.card}>
            <div>
                <img src={cssPic} className={s.logoImage}/>
            </div>
            <div className={s.skillName}>
                <p>CSS</p>
            </div>
        </div>

        <div className={s.card}>
            <div>
                <img src={jsPic} className={s.logoImage}/>
            </div>
            <div className={s.skillName}>
                <p>JavaScript</p>
            </div>
        </div>

        <div className={s.card}>
            <div>
                <img src={reactPic} className={s.logoImage}/>
            </div>
            <div className={s.skillName}>
                <p>React</p>
            </div>
        </div>

        <div className={s.card}>
            <div>
                <img src={nodePic} className={s.logoImage}/>
            </div>
            <div className={s.skillName}>
                <p>NodeJs</p>
            </div>
        </div>

        <div className={s.card}>
            <div>
                <img src={sql} className={s.logoImage}/>
            </div>
            <div className={s.skillName}>
                <p>SQL</p>
            </div>
        </div>

        <div className={s.card}>
            <div>
                <img src={mongo} className={s.logoImage}/>
            </div>
            <div className={s.skillName}>
                <p>MongoDB</p>
            </div>
        </div>
        <div className={s.card}>
            <div>
                <img src={flask} className={s.logoImage}/>
            </div>
            <div className={s.skillName}>
                <p></p>Flask
            </div>
        </div>

        </div>
        </section>
        </>
    );
}

export default Skills;
