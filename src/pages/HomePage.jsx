import React, { useContext } from 'react';
import '../styles/HomePage.css';
import Context from '../context/Context';
import SelectLanguage from '../components/SelectLanguage';
import Header from '../components/Header';
import HomePhrase from '../components/HomePhrase';
import Footer from '../components/Footer';

function HomePage() {
  const { language } = useContext(Context);

  return (
    <div>
      <div
        className={ `home-page-image ${ language === '' ? 'unselected' : null}` }
      >
      <SelectLanguage />
      </div>
      { language !== '' ? <Header /> : null }
      { language !== '' ? <HomePhrase /> : null }
      { language !== '' ? <Footer /> : null }
    </div>
  );
}

export default HomePage; 
