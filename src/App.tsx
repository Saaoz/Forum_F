import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import Profil from './pages/Profil';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/profil' element={<Profil/>} />
    </Routes>
  );
};

export default App;