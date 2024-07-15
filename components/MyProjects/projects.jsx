import s from  "../MyProjects/projects.module.css"

function  Projects(){
    return(
        <>
        <section>
        <div className={s.myProjects}>
            <h1 id="projects">Projects</h1>
        </div>

        <div>
            <h3 className={s.topic}>1. Vehicle Damage Cost Predictor</h3>
            <p className={s.explaination}>
                Implemented a vehicle damage cost predictor as the second year group
                project with a group of 5 memebers. The website provides user with
                estimated cost of repairing the damaged parts once the image is uploaded.
                The fronted of the website was developed using react and tailwind was
                used for styling, the backend was developed flask and the 
                machine learning model was trained using tensorFlow.
            </p>
        </div>

        <br/>
        <div>
            <h3 className={s.topic}>2. Smart Home System</h3>
            <p className={s.explaination}>
            Working on implementing a React-based website for a
            smart home system. React hooks like UseState and
            UseEffect are been utilized in this project. It has a search
            bar that works well. Additionally, it is integrated with user
            authentication and displays the current weather using a API
            </p>
        </div>
        <br/>
        <div>
            <h3 className={s.topic}>3. A flag guessing Android application</h3>
            <p className={s.explaination}>
            Developed a flag-guessing game using Kotlin jetpack
            Compose. The game goes up to 4 levels. The system
            generates a random flag and the user is supposed to
            click the correct country name.  Further, as the game
            goes on the user is presented with a random flag and
            dashes as per the name of the flag and the user is
            supposed to guess the letters of the flag name within 3
            incorrect guesses.
            </p>
        </div>
        <br/>
        <div>
            <h3 className={s.topic}>4. Online Shopping System</h3>
            <p className={s.explaination}>
            Developed a program using Java object-oriented
            programming concepts and a graphical user interface
            (Java Swing) to manage an online shopping system. The
            functionalities include adding products, deleting
            products, printing the list of products added to the
            system, and sorting them.
            </p>
        </div>
        <br/>
        <div>
            <h3 className={s.topic}>5. Online Shopping Website</h3>
            <p className={s.explaination}>
            Worked on building an online shopping website using
            HTML, CSS, and JavaScript, with a group of 4 members.
            It allows users to view the products available in the
            store, add to the cart and checkout, and make payments
            for the items.
            </p>
        </div>
<br/>
        <div>
            <h3 className={s.topic}>5. E-Commerce Website</h3>
            <p className={s.explaination}>
           Designed and Developed a simple e-commerce website using MERN stack
            </p>
        </div>
        </section>
        </>
    );
}

export default Projects;