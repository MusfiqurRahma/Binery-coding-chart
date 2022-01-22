import './App.css';
import * as React from 'react';
import Home from './components/Home/Home';
import SecondLineChart from './components/SecondLineChart/SecondLineChart';
import ThirdLineChart from './components/ThirdLineChart/ThirdLineChart';
import FourthLineChart from './components/FourthLineChart/FourthLineChart';
import FifthLineChart from './components/FifthLineChart/FifthLineChart';
import SixthLineChart from './components/SixthLineChart/SixthLineChart';


function App() {
  return (
    <div className="App">
      <Home></Home>
      <SecondLineChart></SecondLineChart>
      <ThirdLineChart></ThirdLineChart>
      <FourthLineChart></FourthLineChart>
      <FifthLineChart></FifthLineChart>
      <SixthLineChart></SixthLineChart>
    </div>
  );
}

export default App;