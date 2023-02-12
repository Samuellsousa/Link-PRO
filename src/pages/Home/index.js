import './home.css'

import { Social } from '../../components/Social'

import  { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Home(){
    return(
      <div className="home-container">
        <h1>Samuel Gonçalves </h1>
        
        <span>Veja meus links 👇🏻</span>

        <main className="links">
          <section className="link-area">
            <a href="#">
              <p className="link-text">Projetos</p>
            </a>
          </section>

          <section className="link-area">
            <a href="#">
              <p className="link-text">Linkedin</p>
            </a>
          </section>

          <section className="link-area">
            <a href="#">
              <p className="link-text">teste</p>
            </a>
          </section>

          <section className="link-area">
            <a href="#">
              <p className="link-text">GitHub</p>
            </a>
          </section>

          <footer>

            <Social url="https://facebook.com">    
               <FaFacebook size={35} color="#FFF"/>
            </Social>

            <Social url="https://linkedin.com">    
               <FaLinkedin size={35} color="#FFF"/>
            </Social>

            <Social url="https://github.com">    
               <FaGithub size={35} color="#FFF"/>
            </Social>

          </footer>

         </main>

    </div>
  )
}