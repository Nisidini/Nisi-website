
import './App.css'
import NavBar from '../components/NavBar/navBar'
import Bio from '../components/Bio/bio'
import AboutMe from '../components/AboutMe/aboutMe'
import Projects from '../components/MyProjects/projects'
import ContactMe from '../components/contactMe/contactMe'
import Skills from '../components/Skills/skills'
import { BrowserRouter } from 'react-router-dom'



function App() {


  return (
    <>
      <BrowserRouter>
      <div className='home'>
        <div className='nav'> 
        <NavBar/>
        </div>
        <div className='Biography'>
        <Bio/>
        </div>
      </div>
      <div className='aboutme'>
      <AboutMe/>
      
      </div>

      <div className='projects' >
      <Projects/>
      
      </div>
      
      <div className='skills'>
        <Skills/>
      </div>

      <div className='contactMe'>
      <ContactMe/>
      </div>
   
      </BrowserRouter>

      
    </>
  )
}

export default App
