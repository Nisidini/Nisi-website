import s from "../contactMe/contactMe.module.css"
import emailpic  from  "../..//src/assets/gmail.png";
import linkdinPic from "../../src/assets/linkedin.png";
import phonePic from  "../../src/assets/phone-call.png";

function ContactMe(){
    return(
        <>
       <section id="contact">
       <div className={s.contactMe}>
            <h1>Contact Me</h1>
        </div>
        <p className={s.details}>Feel free to contact me and get in touch through:</p>

        <div className={s.method}>  
        <div >
            <img src={emailpic} className={s.logo}/>
        </div>
        <div> 
            <p className={s.email}>nisidini.04@gmail.com</p>
            </div>
        </div>
        
        <div className={s.method}>  
        <div >
            <img src={linkdinPic} className={s.logo}/>
        </div>
        <div> 
            <p className={s.linkdin}><a href="https://www.linkedin.com/in/dahamni-nisidini-b946b3259/">https://www.linkedin.com/in/dahamni-nisidini-b946b3259/</a></p>
            </div>
        </div>

        <div className={s.method}>  
        <div >
            <img src={phonePic} className={s.logo}/>
        </div>
        <div> 
            <p className={s.number}>0771435128</p>
            </div>
        </div>
       </section>
        
        </>
    );
}

export default ContactMe;