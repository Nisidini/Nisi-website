import s from "../AboutMe/aboutMe.module.css"

function AboutMe(){
    return(
        <>
        <section >
        <div  className={s.about}>
            <h1 id="about"> About Me</h1>
        </div>

        <div  className={s.descrip}>
            <div  className={s.para}>
            <p>I am Nisidini, a passionate and detail oriented Software Engineering undergradute at University of Westminster,UK (Informatics Institute Of Techonology  (IIT)) ,Sri Lanka. <br/>
            My passion for technology began from the day I first started to explore how a single click can trigger a multitude of actions over the internet.  This curiosity ignited my interest
             in understanding the intricacies of IT systems and the transformative impact they have on various aspects  of our lives.
            Driven by a curiosity for the ever-evolving world of software, I have immersed myself in various aspects of programming languages, libaries, tools and alogirthms.<br/><br/>
            Beyond the classroom, I have participated in coding competitions, hackathons, and workshops, continuously pushing my boundaries and staying updated with the latest industry trends.
            These experiences have not only sharpened  my technical acumen but have also instilled in me a passion for continuous learning and innovation.<br/><br/>
            As I navigate my academic journey at IIT, I am not only building a strong foundation in software engineering but also cultivating a mindset  that embraces challenges and seeks opportunities for growth. 
            I am excited about the possibilities that lie ahead and look forward to  making meaningful contributions to the world of technology.  </p>
            </div>
            </div>
        </section>
        </>
    );
}

export default AboutMe;