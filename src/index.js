import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import App from './App';
import Contact from './Contact';
import Projects from './Projects';
import RnnRProject from './RnnRProject';
import Landing from './Landing';
import Reply from './Reply';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Landing/>} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="formsubmitted" element={<Reply />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/rnnr" element={<RnnRProject />} />

            </Route>
        </Routes>
    </BrowserRouter>

);


