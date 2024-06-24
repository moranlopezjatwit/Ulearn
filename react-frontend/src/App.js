import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import './Styles.css';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Navbar from './Controls/Navbar';
import { LanguageProvider } from './LanguageContext';
import PythonModules from './pages/modules/PythonModules';
import JavaModules from './pages/modules/JavaModules';
import CppModules from './pages/modules/CppModules';
import About from './pages/About';
import Signup from './pages/Signup';
import Landing from './pages/Landing';

export default function App() {
    return (
        <>
        <title>ULearn</title>
      <LanguageProvider>
            <Router>
            <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/About" element={<About  />}/>
          <Route path="/python-modules" element={<PythonModules />} />
          <Route path="/java-modules" element={<JavaModules />} />
          <Route path="/cpp-modules" element={<CppModules />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
            </LanguageProvider>
        </>
  );
}



/*
import './App.css';
import './Styles.css';
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Navbar from "./Controls/Navbar";

export default function App() {
    let component
    switch (window.location.pathname) {
        case "/":
            component = <App />
            break
        case "/Home":
            component = <Home />
            break
        case "/Introduction":
            component = <Introduction />
            break
        default:
            break
    }

    return (
        <>
            <Navbar />
            {component}
        </>
    );
}
*/
