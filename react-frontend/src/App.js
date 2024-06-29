import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import './Styles.css';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Navbar from './Controls/Navbar';
import Footer from './Controls/Footer';
import { LanguageProvider } from './LanguageContext';
import PythonModules from './pages/modules/PythonModules';
import JavaModules from './pages/modules/JavaModules';
import CppModules from './pages/modules/CppModules';
import About from './pages/About';
import Signup from './pages/Signup';
import Landing from './pages/Landing';

export default function App() {
    return (
        <div id="">
        <title>ULearn</title>
      <LanguageProvider>
          <Router> 
            <Routes>
              <Route path="/" element={<Landing />} />
                <Route path="/Home" element={<><Navbar /><Home /><Footer /></>} />
                <Route path="/Introduction" element={<><Navbar /><Introduction /><Footer /></>} />
                <Route path="/About" element={<><Navbar /><About /><Footer /></>}/>
                <Route path="/python-modules" element={<><Navbar /><PythonModules /><Footer /></>} />
                <Route path="/java-modules" element={<><Navbar /><JavaModules /><Footer /></>} />
                <Route path="/cpp-modules" element={<><Navbar /><CppModules /><Footer /></>} />
                <Route path="/Signup" element={<><Navbar /><Signup /><Footer /></>} />
            </Routes>
          </Router>
      </LanguageProvider>
        </div>
  );
}
