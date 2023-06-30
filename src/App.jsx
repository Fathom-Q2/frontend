import React from 'react';
import Home from './pages/Main/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.module.css';
import UserBrief from '../src/pages/AfterSearch/UserBrief/userBrief';
import TxBrief from './pages/AfterSearch/TxBrief/txBrief';
import Segmentation from './pages/AfterSearch/Segmentation/segmentation';
import Funnel from './pages/AfterSearch/Funnel/funnel';
import Templates from './pages/AfterSearch/Templates/templates';

function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/userbrief/:address" element={<UserBrief />} />
        <Route path="/txbrief/:address" element={<TxBrief />} />
        <Route path="/segmentation/:address" element={<Segmentation />} />
        <Route path="/funnel/:address" element={<Funnel />} />
        <Route path="/templates/:address" element={<Templates />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
