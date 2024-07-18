import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HelloWorld from './components/HelloWorld';
import Count from './components/Count';
import Forms from './components/Forms';
import Index from './components/Index';
import Navbar from './components/Navbar';

function AppRoutes() {

  return (
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/helloworld" element={<HelloWorld />} />
        <Route path="/count" element={<Count />} />
        <Route path="/forms" element={<Forms />} />
    </Routes>
    )
}

export default AppRoutes;