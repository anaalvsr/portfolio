import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [language, setLanguage] = useState('');

  const contextValue = {
    language,
    setLanguage,
  }

  return (
    <Context.Provider value={ contextValue } >
      { children }
    </Context.Provider>
  );
}

export default Provider;
