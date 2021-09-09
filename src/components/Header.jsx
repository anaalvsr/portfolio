import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import '../styles/Header.css';

function Header() {
  const { language } = useContext(Context);

  console.log(language);

  const textPT = () => {
    return (
      <ul className="nav">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li className="link-text">
            PÁGINA INICIAL
          </li>
        </Link>
        <Link to="/About" style={{ textDecoration: 'none' }}>
          <li className="link-text">
            SOBRE MIM
          </li>
        </Link>
        <Link to="/Curriculum" style={{ textDecoration: 'none' }}>
          <li className="link-text">
            CURRICULUM
          </li>
        </Link>
        <Link to="/Jobs" style={{ textDecoration: 'none' }}>
          <li className="link-text">
            PROJETOS
          </li>
        </Link>
        <Link to="/Contact" style={{ textDecoration: 'none' }}>
          <li  className="link-text">
            CONTATO
          </li>
        </Link>
      </ul>
    );
  }

  const textEN = () => {
    return (
      <ul className="nav">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li className="link-text">
            HOME
          </li>
        </Link>
        <Link to="/About" style={{ textDecoration: 'none' }}>
          <li className="link-text">
            ABOUT
          </li>
        </Link>
        <Link to="/Curriculum" style={{ textDecoration: 'none' }}>
          <li className="link-text">
            CURRICULUM
          </li>
        </Link>
        <Link to="/Jobs" style={{ textDecoration: 'none' }}>
          <li className="link-text">
            JOBS
          </li>
        </Link>
        <Link to="/Contact" style={{ textDecoration: 'none' }}>
          <li className="link-text">
            CONTACT
          </li>
        </Link>
      </ul>
    );
  }

  return (
    <header className="menu">
      { language === 'pt' ? textPT() : textEN() }
    </header>
  )
}

export default Header;
