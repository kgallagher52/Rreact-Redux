import React from 'react';
import Logo from './assets/react-redux.png';
//Components
import MainPage from './MainPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <img src={Logo} alt="Main logo"/>
      <MainPage/>
    </div>
  );
}

export default App;