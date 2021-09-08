import React, { useContext } from 'react';
import Context from '../context/Context';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Jobs() {
  const { language } = useContext(Context);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default Jobs;