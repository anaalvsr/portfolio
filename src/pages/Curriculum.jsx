import React, { useContext } from 'react';
import Context from '../context/Context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Curriculum.css';

function Curriculum() {
  const { language } = useContext(Context);

  const textPresentationPT = () => {
    return (
      <p>
        Estou em capacitação para atuar como desenvolvedora web full stack 
        e estou em busca de oportunidades para consolidar meus aprendizados 
        diários e estender minhas capacidades, em crescimento junto à empresa. 
        Além disso, estou em constante pesquisa e acumulando conhecimentos na 
        área de design. 
      </p>
    );
  }

  const textPresentationEN = () => {
    return (
      <p>
        I'm in training to act as a full stack web developer
        and I'm looking for opportunities to consolidate my daily learnings 
        and extend my capabilities, growing with the company. In addition, 
        I am constantly researching and accumulating knowledge in the
        design area.
      </p>
    );
  }
  
  const textFormationPT = () => {
    return (
      <>
        <h4>Formação</h4>
        <ul>
          <p className="timing">&gt; 2016 - 2018</p>
          <h5>Ensino Médio Integrado</h5>
          <p>Centro Federal de Educação Tecnológica de Minas Gerais</p>
          <p className="timing">&gt; 2016 - 2018</p>
          <h5>Tecnológo em Hospedagem</h5>
          <p>Centro Federal de Educação Tecnológica de Minas Gerais</p>
          <p>Curso ligado ao lazer e hospitalidade, abrange 
            diversas áreas como práticas avançadas em línguas 
            estrangeiras (inglês e espanhol), desenvolvimento
            da comunicação, administração, entre outros. </p>
          <p className="timing">&gt; 2016 - 2017</p>
          <h5>Curso de Língua Inglesa</h5>
          <p>The Best - Idiomas e Informática</p>
          <p>Conversação e escrita avançadas.</p>
          <p className="timing">&gt; abril/2021 - atual [previsão: abril/2022]</p>
          <h5>Curso de Desenvolvimento Web Full Stack</h5>
          <p>Trybe - Escola de Programação</p>
          <p>Curso que ensina a programar, em diversas linguagens, sempre de acordo com a
             necessidade do mercado. Focado no aprendizado e crescimento dos alunos, também 
             promove atividades de agregação pessoal. Trabalho em equipe é um dos requisitos 
             para ser aluno Trybe.</p>
        </ul>
      </>
    );
  }

  const textFormationEN = () => {
    return (
      <>
        <h4>Schooling</h4>
        <ul>
          <p className="timing">&gt; 2016 - 2018</p>
          <h5>High School</h5>
          <p>Centro Federal de Educação Tecnológica de Minas Gerais</p>
          <p className="timing">&gt; 2016 - 2018</p>
          <h5>Hospedagem Technologist</h5>
          <p>Centro Federal de Educação Tecnológica de Minas Gerais</p>
          <p>Course related to leisure and hospitality, covers
            several areas such as advanced language practices
            (English and Spanish), communication development, 
            administration, among others.</p>
          <p className="timing">&gt; 2016 - 2017</p>
          <h5>English Course</h5>
          <p>The Best - Idiomas e Informática</p>
          <p>Advanced conversation and writing.</p>
          <p className="timing">
          &gt; april/2021 - actual [forethought: april/2022]
          </p>
          <h5>Full Stack Web Development Course</h5>
          <p>Trybe - Escola de Programação</p>
          <p>Course that teaches programming, in different languages, always according 
            to the market need. Focused on student learning and growth, it also promotes 
            personal aggregation activities. Work in team is one of the requirements to 
            be a Trybe student.</p>
        </ul>
      </>
    );
  }

  const textExperiencePT = () => {
    return (
      <>
        <h4>Experiência</h4>
        <ul>
          <p className="timing">&gt; maio/2021 - atual</p>
          <h5>Coletivo Elas Codam</h5>
          <p>Liderança do Time de Organização.</p>
        </ul>
      </>
    );
  }

  const textExperienceEN = () => {
    return (
      <>
        <h4>Experience</h4>
        <ul>
          <p className="timing">&gt; may/2021 - actual</p>
          <h5>Group Elas Codam</h5>
          <p>Organization Team Leadership.</p>
        </ul>
      </>
    );
  }

  const textHabilitiesPT = () => {
    return (
      <>
      <h4>Habilidades</h4>
      <p><strong>HTML -</strong> me sinto confortável em trabalhar 
      com esta habilidade</p>
      <p><strong>CSS -</strong> me sinto confortável em trabalhar 
      com esta habilidade</p>
      <p><strong>JavaScript -</strong> me sinto confortável em trabalhar 
      com esta habilidade</p>
      <p><strong>React -</strong> me sinto confortável em trabalhar 
      com esta habilidade</p>
      <p><strong>Lógica -</strong> me sinto confortável em trabalhar 
      com esta habilidade</p>
      <p><strong>Git -</strong> me sinto confortável em trabalhar 
      com esta habilidade</p>
    </>
    );
  }

  const textHabilitiesEN = () => {
    return (
      <>
        <h4>Skills</h4>
        <p><strong>HTML -</strong> I feel confortable to work with this</p>
        <p><strong>CSS -</strong>  I feel confortable to work with this</p>
        <p><strong>JavaScript -</strong>  I feel confortable to work with this</p>
        <p><strong>React -</strong>  I feel confortable to work with this</p>
        <p><strong>Lógica -</strong>  I feel confortable to work with this</p>
        <p><strong>Git -</strong>  I feel confortable to work with this</p>
      </>
    );
  }

  return (
    <div>
      <Header />
      <section className="content-curriculum">
        <div className="first-column">
        <span className="presentation-curriculum">
          { language === 'pt' ? textPresentationPT() : textPresentationEN() }
        </span>
        <span className="formation-curriculum">
          { language === 'pt' ? textFormationPT() : textFormationEN() }
        </span>
        </div>
        <div className="second-column">
        <span className="experience-curriculum">
          { language === 'pt' ? textExperiencePT() : textExperienceEN() }
        </span>
        <span className="habilities-curriculum">
          { language === 'pt' ? textHabilitiesPT() : textHabilitiesEN() }
        </span>
        <a
          href="https://drive.google.com/file/d/16VHn2SKRGOIGCG6L3BeNzkAnASVgvkKL/view?usp=sharing" 
          target="_blank"
          rel="noreferrer"  
        >
          <button type="button" className="btn-download">DOWNLOAD PDF</button>
        </a>
        </div>
      </section>
        <Footer />
    </div>
  );
}

export default Curriculum;
