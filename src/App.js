import './App.css';
import * as React from 'react';
import Home from './components/Home/Home';
import SecondLineChart from './components/SecondLineChart/SecondLineChart';


function App() {
  return (
    <div className="App">
      <Home></Home>
      <SecondLineChart></SecondLineChart>
    </div>
  );
}

export default App;