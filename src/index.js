import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Landing from './Landing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
    <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="landing" element={<Landing />} />
    </Route>
</Routes>
</BrowserRouter>

);


