import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import Register from './Register';

const login = () => {
    return (
        <div>
           <Routes>
               <Route path="/" element={LoginForm} />
               <Route path="/register" element={Register} />
           </Routes>
        </div>
    )
}

export default login
