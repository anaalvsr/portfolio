import React, { useState, useContext } from 'react';
import Context from '../context/Context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Data from '../Data';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import '../styles/Jobs.css';

function Jobs() {
  const [select, setSelect] = useState('Lessons Learned');
  const { language } = useContext(Context);

  const createJobs = ({ name }, index) => {
    return <option key={ index }>{ name }</option>;
  }

  return (
    <>
      <Header />
      <div className="jobs-content">
        <select onChange={ ({ target: { value } }) => setSelect(value) } className="select">
          { Data.map((job, index) => createJobs(job, index)) }
        </select>
        <section className="description-content">
          <div className="images">
            { Data.map(({ name, imagePath }) => name === select ? <Carousel width='80%'> 
              { imagePath.map((image, index) => (
                <img key={ index } src={ image } alt="Foto ilustrativa do projeto" />
              )) }
                </Carousel> 
            : null) }
          </div>
          <div className="description">
            { Data.map(({ name }, index) => name === select ? <h2 key={ index }>{ name }</h2> : null) }
            { Data.map(({ name, descriptionPT, descriptionEN }, index) => (
                name === select && language === 'Português' ? <p key={ index }>{ descriptionPT }</p> 
                : <p key={ index }>{ descriptionEN }</p>
            )) }
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Jobs;