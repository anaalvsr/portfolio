import React from 'react';
import './styles/App.css'
import Routes from './Routes';
import Provider from './context/Provider';

function App() {
  return (
    <div className="principal">
      <Provider>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
