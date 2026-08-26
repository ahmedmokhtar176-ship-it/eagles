import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import './styles.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App(){
  return <Layout><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes></Layout>;
}

createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>);
