import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import App from './App';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import RnnRProject from './RnnRProject';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/rnnr" element={<RnnRProject />} />

            </Route>
        </Routes>
    </BrowserRouter>

);


