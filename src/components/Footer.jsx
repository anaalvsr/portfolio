import React, { useContext } from 'react';
import Context from '../context/Context';
import '../styles/Footer.css';

function Footer() {
  const { language } = useContext(Context);

  const textPT = () => {
    return <p>&copy; Criado e desenvolvido por Laura Ramos.</p>;
  }

  const textEN = () => {
    return <p>&copy; Created and developed by Laura Ramos.</p>
  }

  return (
    <footer>
      { language === 'pt' ? textPT() : textEN() }
    </footer>
 )
}

export default Footer;
