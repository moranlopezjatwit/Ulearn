import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Styles.css';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Navbar from './Controls/Navbar';
import Footer from './Controls/Footer';
import { LanguageProvider } from './LanguageContext';

import PythonModules from './pages/modules/PythonModules';
import PythonVariables from './pages/modules/PythonVariables';
import PythonLoops from './pages/modules/PythonLoops';
import PythonFunctions from './pages/modules/PythonFunctions';

import JavaModules from './pages/modules/JavaModules';
import JavaVariables from './pages/modules/JavaVariables';
import JavaLoops from './pages/modules/JavaLoops';
import JavaFunctions from './pages/modules/JavaFunctions';

import CppModules from './pages/modules/CppModules';
import CppVariables from './pages/modules/CppVariables';
import CppLoops from './pages/modules/CppLoops';
import CppFunctions from './pages/modules/CppFunctions';

import About from './pages/About';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import Protected from './pages/Protected';
import MyComponent from './components/MyComponent';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <div>
      <title>ULearn</title>
        <UserProvider>
          <LanguageProvider>
            <Router> 
              <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Home" element={<><Navbar /><Home /><Footer /></>} />
            <Route path="/Introduction" element={<><Navbar /><Introduction /><Footer /></>} />
            <Route path="/About" element={<><Navbar /><About /><Footer /></>}/>

            <Route path="/Python-Modules" element={<><Navbar /><PythonModules /><Footer /></>} />
            <Route path="/Python-Variables" element={<><Navbar /><PythonVariables /><Footer /></>} />
            <Route path="/Python-Loops" element={<><Navbar /><PythonLoops /><Footer /></>} />
            <Route path="/Python-Functions" element={<><Navbar /><PythonFunctions /><Footer /></>} />

            <Route path="/Java-Modules" element={<><Navbar /><JavaModules /><Footer /></>} />
            <Route path="/Java-Variables" element={<><Navbar /><JavaVariables /><Footer /></>} />
            <Route path="/Java-Loops" element={<><Navbar /><JavaLoops /><Footer /></>} />
            <Route path="/Java-Functions" element={<><Navbar /><JavaFunctions /><Footer /></>} />

            <Route path="/Cpp-Modules" element={<><Navbar /><CppModules /><Footer /></>} />
            <Route path="/Cpp-Variables" element={<><Navbar /><CppVariables /><Footer /></>} />
            <Route path="/Cpp-Loops" element={<><Navbar /><CppLoops /><Footer /></>} />
            <Route path="/Cpp-Functions" element={<><Navbar /><CppFunctions /><Footer /></>} />

            <Route path="/Signup" element={<><Navbar /><Signup /><Footer /></>} />
            <Route path="/Register" element={<><Navbar /><Register /></>} />
            <Route path="/login" element={<><Navbar /><Login /><Footer /></>} />
            <Route path="/protected" element={<><Navbar /><Protected /><Footer /></>} />
            <Route path="/my-component" element={<><Navbar /><MyComponent /><Footer /></>} />
          </Routes>
        </Router>
      </LanguageProvider>
    </UserProvider>
    </div>
  );
}
