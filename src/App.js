import logo from './logo.svg';
import './App.css';
import { Home } from './Compoents/Time/Time';
import { Route, Routes } from 'react-router-dom';
import { Project } from './Compoents/Project/Project';
import { Whyharvest } from './Compoents/whyharvestpages/Whyharvest';
import { Feature } from './Compoents/features/Feature';
import { Coustomer } from './Compoents/Coustomer/Coustomer';
import { Price } from './Compoents/Price/Price';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path='/why' element={<Whyharvest />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='/coustomer' element={<Coustomer />} />
        <Route path='/price' element={<Price />} />
      </Routes>
    
    </div>
  );
}

export default App;
