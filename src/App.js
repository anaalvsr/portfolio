import React from 'react';
import Provider from './context/Provider';
import Routes from './Routes';
import './styles/App.css';

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
