import React, { useContext } from 'react';
import Context from '../context/Context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile from '../images/foto-perfil.jpg';
import '../styles/About.css';

function About() {
  const { language } = useContext(Context);
  
  const textPT = () => {
    return (
      <>
        <p>Me chamo Ana Laura Alves Ramos, mas pode me chamar de Laura!</p>
        <br/>
        <p>Sou da capital mineira, apaixonada por tudo que ela tem para oferecer, 
          porém, também, curiosa com o que o mundo tem guardado por aí! Sou formada 
          em Hospedagem pelo Centro Federal de Ensino Tecnológico de Minas Gerais (CEFET-MG). 
          Tenho certificado de Inglês avançado pelo The Best - Idiomas e Informática.</p>
        <br/>
        <p>Adentrei ao mundo do design e tecnologia por acaso e, hoje, estou me dedicando 
        quase que exclusivamente a ele. Estudo Desenvolvimento Web na Trybe - Escola de 
        Programação e, no meu tempo livre, me dedico a aprender design com cursos de formação livre.</p>
        <br/>
        <p>Sou focada, dedicada e proativa, gosto de assumir a liderança e me arriscar,  
        quando necessário. Aqui, compartilho um pouco do que eu já produzi, projetos pessoais
         e alguns desenvolvidos nos cursos.</p>
        <br/>
        <p>Espero que goste!</p>
      </>
    );
  }

  const textEN = () => {
    return (
      <>
        <p>
          My name is Ana Laura Alves Ramos, but you can call me Laura!
        </p>
        <br/>
        <p>
          I'm from Brasil, most especific from Belo Horizonte - Minas Gerais. I'm
          in love with everything that this city can offer, but I'm also very curious about 
          what the world holds around. I'm majored in Hospedagem by the Centro de Educação 
          Técnológica de Minas Gerais (CEFET-MG). And I also have a degree of advanced English 
          by The Best - Idiomas e Informática.
        </p>
        <br/>
        <p>
          I entered to the technology world by coincidence and, today, I'm dedicating almost 
          all my time to it. I study web development at Trybe - Escola de Programação and, in 
          my free time I do some extra courses in design. 
        </p>
        <br/>
        <p>
          I'm very focused, dedicated, and proactive, I like to take the lead and some risks, when 
          necessary. Here, I share some of my production, personal projects and some developed in class.
        </p>
        <br/>
        <p>Hope you enjoy it!</p>
      </>
    );
  }

  return (
    <div>
      <Header />
      <section className="content-about">
        <span className="infos-presentation">
          <img src={ Profile } alt="Laura Ramos" className="img-profile" />
          <p>Ana Laura Alves Ramos</p>
          <p>20 Anos</p>
          <p>Belo Horizonte - MG, Brasil</p>
        </span>
        <div className="text-about">
          { language === 'pt' ? textPT() : textEN() }
        </div>
      </section>
        <Footer />
    </div>
  );
}

export default About;