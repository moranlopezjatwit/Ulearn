import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Styles.css';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Navbar from './Controls/Navbar';
import { LanguageProvider } from './LanguageContext';
import PythonModules from './pages/modules/PythonModules';
import JavaModules from './pages/modules/JavaModules';
import CppModules from './pages/modules/CppModules';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/python-modules" element={<PythonModules />} />
          <Route path="/java-modules" element={<JavaModules />} />
          <Route path="/cpp-modules" element={<CppModules />} />
        </Routes>
      </Router>
    </LanguageProvider>
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
