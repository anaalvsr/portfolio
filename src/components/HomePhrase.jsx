import React, { useContext} from 'react';
import Context from '../context/Context';
import '../styles/HomePhrase.css';

function HomePhrase() {
  const { language } = useContext(Context);

  const textPT = () => {
    return (
      <p className="phrase">
        “Cada sonho que você deixa para trás é um pedaço do futuro que deixa de existir.”
      </p>
    );
  }

  const textEN = () => {
    return (
      <p className="phrase">
        “Every dream you leave behind is a piece of the future that ceases to exist.”
      </p>
    );
  }

  return (
    <div className="content-homepage">
      { language === 'pt' ? textPT() : textEN() }
    </div>
  )
}

export default HomePhrase;