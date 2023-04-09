import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
//import ResponsiveStack from './components/ResponsiveStack';
import BsNavbar from './components/BsNavBar';
import SplashCard from './components/SplashCard';
import './App.css';

//<MiniDrawer />
//<ResponsiveStack />
function App() {
  return (
    <div className="App">
      <BsNavbar />
      <SplashCard height={250} />
      <img src={logo} style={{ width: 30, height: 30 }} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
