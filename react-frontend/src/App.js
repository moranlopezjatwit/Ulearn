import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Styles.css';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Navbar from './Controls/Navbar';
import Footer from './Controls/Footer';
import { UserContext } from './context/UserContext';

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

function App() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = jwtDecode(token);
      setUser({ username: decodedUser.username });
    }
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Home" element={<><Home /><Footer /></>} />
          <Route path="/Introduction" element={<><Introduction /><Footer /></>} />
          <Route path="/About" element={<><About /><Footer /></>} />
          <Route path="/Python-Modules" element={<><PythonModules /><Footer /></>} />
          <Route path="/Python-Variables" element={<><PythonVariables /><Footer /></>} />
          <Route path="/Python-Loops" element={<><PythonLoops /><Footer /></>} />
          <Route path="/Python-Functions" element={<><PythonFunctions /><Footer /></>} />
          <Route path="/Java-Modules" element={<><JavaModules /><Footer /></>} />
          <Route path="/Java-Variables" element={<><JavaVariables /><Footer /></>} />
          <Route path="/Java-Loops" element={<><JavaLoops /><Footer /></>} />
          <Route path="/Java-Functions" element={<><JavaFunctions /><Footer /></>} />
          <Route path="/Cpp-Modules" element={<><CppModules /><Footer /></>} />
          <Route path="/Cpp-Variables" element={<><CppVariables /><Footer /></>} />
          <Route path="/Cpp-Loops" element={<><CppLoops /><Footer /></>} />
          <Route path="/Cpp-Functions" element={<><CppFunctions /><Footer /></>} />
          <Route path="/Signup" element={<><Signup /><Footer /></>} />
          <Route path="/Register" element={<><Register /></>} />
          <Route path="/login" element={<><Login /><Footer /></>} />
          <Route path="/protected" element={<><Protected /><Footer /></>} />
          <Route path="/my-component" element={<><MyComponent /><Footer /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

