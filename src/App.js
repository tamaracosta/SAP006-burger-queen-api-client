import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import Notfound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/login/*" element={<Login />}></Route>
      <Route path="/" element={<Register />}></Route>
      <Route path="*" element={<Notfound />}></Route>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
