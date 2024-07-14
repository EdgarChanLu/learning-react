import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App'
import HelloWorld from './components/HelloWorld';
import Count from './components/Count';
import Forms from './components/Forms';

function AppRoutes() {

    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/helloworld" element={<HelloWorld />} />
        <Route path="/count" element={<Count />} />
        <Route path="/forms" element={<Forms />} />
        {/* <Route path="*" element={<App />} /> */}
    </Routes>
}

export default AppRoutes;