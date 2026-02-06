import React from 'react';
import Heading from './components/Heading';
import Slide from './components/Slide';
import Clients from './components/Clients';
import Comunity from './components/Comunity';
import Spending from './components/Spending';
import Customer from './components/Customer';
import Demo from './components/Demo';
import Howto from './components/Howto';
import Help from './components/Help';
import Footing from './components/Footing';
import './App.css';
import Cards from './components/Cards.jsx';
function App() {
  return (
    <div className="app-container">
      <Heading />
      <main>
        <Slide />
        <Clients />
        <Comunity />
        <Spending />
        <Customer />
        <Howto />
        <Help />
        <Cards/>
        <Demo />
      </main>
      <Footing />
    </div>
  );
}

export default App;
