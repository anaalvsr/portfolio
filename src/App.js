import React from 'react';
import Provider from './context/Provider';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Provider>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
