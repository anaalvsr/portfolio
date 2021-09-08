import React, { useContext } from 'react';
import Context from '../context/Context';
import '../styles/SelectLanguage.css';

function SelectLanguage() {
  const { language, setLanguage } = useContext(Context);

  const select = () => {
    return (
      <div
        className="select-language"
      >
        <select
          className="language"
          onChange={ ({ target: { value } }) => setLanguage(value) }
          >
          <option value="empty"></option>
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
      </div>
    );
  }

  return (
    <>
      { language === ''
        ? select()
        : null
      }
    </>
  );
}

export default SelectLanguage;