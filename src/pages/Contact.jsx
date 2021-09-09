import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Contact.css';

function Contact() {
  return (
    <div>
      <Header />
      <div className="content-contact">
        <p id="email">
          contato@laura-ramos.com.br
        </p>
        <a
          href={`https://api.whatsapp.com/send?phone=5531975229268&text=`}
          id="whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          +55 31 9 7522 9268
        </a>
        <a
          href="https://github.com/anaalvsr"
          id="github"
          target="_blank"
          rel="noreferrer"
        >
          /anaalvsr
        </a>
        <a
          href="https://www.linkedin.com/in/laura-a-ramos/"
          id="linkedin"
          target="_blank"
          rel="noreferrer"
        >
          /laura-a-ramos
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;