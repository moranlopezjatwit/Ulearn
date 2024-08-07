import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import CppSidenav from '../../Controls/CppSidenav';

export default function CppFunctions() {
  const { user, progress, setProgress } = useContext(UserContext);

  const handleCompleteModule = async () => {
    const moduleScore = 100; // Set the score for this module

    try {
      const res = await axios.post('http://localhost:5000/api/progress/save', {
        module: 'CppFunctions',
        score: moduleScore,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setProgress((prevProgress) => [
        ...prevProgress.filter(p => p.module !== 'CppFunctions'),
        { module: 'CppFunctions', score: moduleScore, lastAccessed: new Date() }
      ]);
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const cppFunctionsProgress = progress.find(p => p.module === 'CppFunctions');
  const totalScore = progress.reduce((acc, curr) => acc + curr.score, 0);

  return (
    <div className="cpp-functions"> {/* Replace id with className */}
      <CppSidenav />
      <div className="content-container">
        <h1 className="Section-header">C++ Functions</h1>
        <br />
        <p className="Section-content">Functions in C++ are blocks of code that can be reused to execute a specific operation...</p>
        <br />
        <div className="Example">
          <h2>Example 1: Function Creation and calling</h2>
          <pre>
            <code>{`//Function creation
void greetWorld(){
  std::cout << "Hello World!" << std::endl;
}

//Function call
greetWorld();
greetWorld();`}
            </code>
          </pre>
          <h2>Result:</h2>
          <pre>
            <code>{`Hello World!
Hello World!`}
            </code>
          </pre>
        </div>
        <br />
        <p className="Section-content">
          Let's break down greetWorld into the components that make it up. First is the <span className="Bold-word">return type</span>, which defines what data type the function will return when it finishes executing...
        </p>
        <br />
        <p className="Section-content">Now let's look at a function that has parameters and returns data.</p>
        <div className="Example">
          <h2>Example 2: Function Types and Parameters</h2>
          <pre>
            <code>{`//Function Creation
static bool isValTen(int val){
  if(val == 10) {
    return true;
  } else {
    return false;
  }
}

//variable declaration
int num1 = 7;
int num2 = 10;

//Function Call
std::cout << isValTen(num1) << std::endl;
std::cout << isValTen(num2) << std::endl;`}
            </code>
          </pre>
          <h2>Result:</h2>
          <pre>
            <code>{`false
true`}
            </code>
          </pre>
        </div>
        <br />
        <p className="Section-content">There are two main differences between this example and the last one...</p>

        <div className="Centered-container">
          <div className="Centered">
            <div className="Bottom-buttons">
              <Link to="/Cpp-Loops"><button className="Lesson-transition">Prev</button></Link>
              <Link to="/Cpp-Functions-Test"><button className="Lesson-transition">Exercises</button></Link>
              <button className="Lesson-transition" onClick={handleCompleteModule}>Complete Module</button>
            </div>
          </div>
        </div>
        {cppFunctionsProgress && (
          <div className="Section-content">
            <h2>Your Progress</h2>
            <p>Score: {cppFunctionsProgress.score}</p>
            <p>Last Accessed: {new Date(cppFunctionsProgress.lastAccessed).toLocaleString()}</p>
            <p>Total Score: {totalScore}</p>
          </div>
        )}
      </div>
    </div>
  );
}
