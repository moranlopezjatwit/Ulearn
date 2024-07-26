// src/App.js
import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Styles.css';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Navbar from './Controls/Navbar';
import Footer from './Controls/Footer';
import { UserProvider, UserContext } from './context/UserContext';
import { jwtDecode } from 'jwt-decode';
import { LanguageProvider } from './context/LanguageContext';

//Python Page Imports
import PythonModules from './pages/modules/PythonModules';
import PythonVariables from './pages/modules/PythonVariables';
import PythonVarsTest from './pages/modules/PythonVarsTest';
import PythonLoops from './pages/modules/PythonLoops';
import PythonLoopsTest from './pages/modules/PythonLoopsTest';
import PythonFunctions from './pages/modules/PythonFunctions';
import PythonFunctionsTest from './pages/modules/PythonFunctionsTest';

//Java Page Imports
import JavaModules from './pages/modules/JavaModules';
import JavaVariables from './pages/modules/JavaVariables';
import JavaVarsTest from './pages/modules/JavaVarsTest';
import JavaLoops from './pages/modules/JavaLoops';
import JavaLoopsTest from './pages/modules/JavaLoopsTest';
import JavaFunctions from './pages/modules/JavaFunctions';
import JavaFunctionsTest from './pages/modules/JavaFunctionsTest';

//C++ Page Imports
import CppModules from './pages/modules/CppModules';
import CppVariables from './pages/modules/CppVariables';
import CppVarsTest from './pages/modules/CppVarsTest';
import CppLoops from './pages/modules/CppLoops';
import CppLoopsTest from './pages/modules/CppLoopsTest';
import CppFunctions from './pages/modules/CppFunctions';
import CppFunctionsTest from './pages/modules/CppFunctionsTest';

import About from './pages/About';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import Protected from './pages/Protected';
import MyComponent from './components/MyComponent';

function App() {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = jwtDecode(token);
      setUser({ username: decodedUser.username });
    }
  }, [setUser]);

  return (
    <UserProvider>
      <LanguageProvider>
        <div>
          <title>ULearn</title>
          <Router>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/Home" element={<><Navbar /><Home /><Footer /></>} />
              <Route path="/Introduction" element={<><Navbar /><Introduction /><Footer /></>} />
              <Route path="/About" element={<><Navbar /><About /><Footer /></>} />

              {/*Python Module Links*/}
              <Route path="/Python-Modules" element={<><Navbar /><PythonModules /><Footer /></>} />
              <Route path="/Python-Variables" element={<><Navbar /><PythonVariables /><Footer /></>} />
              <Route path="/Python-Vars-Test" element={<><Navbar /><PythonVarsTest /><Footer /></>} />
              <Route path="/Python-Loops" element={<><Navbar /><PythonLoops /><Footer /></>} />
              <Route path="/Python-Loops-Test" element={<><Navbar /><PythonLoopsTest /><Footer /></>} />
              <Route path="/Python-Functions" element={<><Navbar /><PythonFunctions /><Footer /></>} />
              <Route path="/Python-Functions-Test" element={<><Navbar /><PythonFunctionsTest /><Footer /></>} />

              {/*Java Module Links*/}
              <Route path="/Java-Modules" element={<><Navbar /><JavaModules /><Footer /></>} />
              <Route path="/Java-Variables" element={<><Navbar /><JavaVariables /><Footer /></>} />
              <Route path="/Java-Vars-Test" element={<><Navbar /><JavaVarsTest /><Footer /></>} />
              <Route path="/Java-Loops" element={<><Navbar /><JavaLoops /><Footer /></>} />
              <Route path="/Java-Loops-Test" element={<><Navbar /><JavaLoopsTest /><Footer /></>} />
              <Route path="/Java-Functions" element={<><Navbar /><JavaFunctions /><Footer /></>} />
              <Route path="/Java-Functions-Test" element={<><Navbar /><JavaFunctionsTest /><Footer /></>} />

              {/*Cpp Module Links*/}
              <Route path="/Cpp-Modules" element={<><Navbar /><CppModules /><Footer /></>} />
              <Route path="/Cpp-Variables" element={<><Navbar /><CppVariables /><Footer /></>} />
              <Route path="/Cpp-Vars-Test" element={<><Navbar /><CppVarsTest /><Footer /></>} />
              <Route path="/Cpp-Loops" element={<><Navbar /><CppLoops /><Footer /></>} />
              <Route path="/Cpp-Loops-Test" element={<><Navbar /><CppLoopsTest /><Footer /></>} />
              <Route path="/Cpp-Functions" element={<><Navbar /><CppFunctions /><Footer /></>} />
              <Route path="/Cpp-Functions-Test" element={<><Navbar /><CppFunctionsTest /><Footer /></>} />

              <Route path="/Signup" element={<><Navbar /><Signup /><Footer /></>} />
              <Route path="/Register" element={<><Navbar /><Register /></>} />
              <Route path="/login" element={<><Navbar /><Login /><Footer /></>} />
              <Route path="/protected" element={<><Navbar /><Protected /><Footer /></>} />
              <Route path="/my-component" element={<><Navbar /><MyComponent /><Footer /></>} />
            </Routes>
          </Router>
        </div>
      </LanguageProvider>
    </UserProvider>
  );
}

export default App;
