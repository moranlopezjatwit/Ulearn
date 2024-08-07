import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import CppSidenav from '../../Controls/CppSidenav';

export default function CppLoops() {
  const { user, progress, setProgress } = useContext(UserContext);

  const handleCompleteModule = async () => {
    const moduleScore = 100; // Set the score for this module

    try {
      const res = await axios.post('http://localhost:5000/api/progress/save', {
        module: 'CppLoops',
        score: moduleScore,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setProgress((prevProgress) => [
        ...prevProgress.filter(p => p.module !== 'CppLoops'),
        { module: 'CppLoops', score: moduleScore, lastAccessed: new Date() }
      ]);
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const cppLoopsProgress = progress.find(p => p.module === 'CppLoops');
  const totalScore = progress.reduce((acc, curr) => acc + curr.score, 0);

  return (
    <div className="cpp-loops"> {/* Replace id with className */}
      <CppSidenav />
      <div className="content-container">
        <h1 className="Section-header">If Statements & Loops in C++</h1>
        <p className="Section-content">
          Just as with variables, logic is another foundational piece to any programming language...
        </p>
        <br />
        <p className="Section-content">
          Let's begin by looking at if statements...
        </p>
        <br />
        <div className="Example">
          <h2>Example 1: If / Else</h2>
          <pre>
            <code>
              {`//Variable declaration
int testGrade = 90;
bool passed = false;

if(testGrade >= 60) {
  passed = true;
}

//Printing variables
if(passed == true){
  std::cout << "Student passed the exam" << std::endl;
} else {
  std::cout << "Student did not pass the exam" << std::endl;
}`}
            </code>
          </pre>
          <h2>Result:</h2>
          <pre>
            <code>{`Student passed the exam`}
            </code>
          </pre>
        </div>
        <br />
        <p className="Section-content">
          Here we see two different forms of if statement usage...
        </p>
        <br />
        <div className="Example">
          <h2>Example 2: For Loops</h2>
          <pre>
            <code>{`//Variable Declaration
int numLoops = 5;

//Loop Execution
for(int i = 0; i < numLoops; i++) {
  std::cout << i << std::endl;
}`}
            </code>
          </pre>
          <h2>Result:</h2>
          <pre>
            <code>{`0
1
2
3
4`}
            </code>
          </pre>
        </div>
        <br />
        <p className="Section-content">The parameters of a for loop are a bit more complex...</p>
        <br />
        <div className="Example">
          <h2>Example 3: While Loops</h2>
          <pre>
            <code>{`//Variable Declaration
String display = "";

int limit = 5;
int current = 0;

//Loop Execution
while(current < limit) {
  current++;
  display += "A";
  std::cout << display << std::endl;
}`}
            </code>
          </pre>
          <h2>Result:</h2>
          <pre>
            <code>{`A
AA
AAA
AAAA
AAAAA`}
            </code>
          </pre>
        </div>
        <br />
        <p className="Section-content">Just like for loops, while loops will repeatedly execute whatever code they contain within...</p>

        <div className="Centered-container">
          <div className="Centered">
            <div className="Bottom-buttons">
              <Link to="/Cpp-Variables"><button className="Lesson-transition">Prev</button></Link>
              <Link to="/Cpp-Loops-Test"><button className="Lesson-transition">Exercises</button></Link>
              <Link to="/Cpp-Functions"><button className="Lesson-transition">Next</button></Link>
              <button className="Lesson-transition" onClick={handleCompleteModule}>Complete Module</button>
            </div>
          </div>
        </div>
        {cppLoopsProgress && (
          <div className="Section-content">
            <h2>Your Progress</h2>
            <p>Score: {cppLoopsProgress.score}</p>
            <p>Last Accessed: {new Date(cppLoopsProgress.lastAccessed).toLocaleString()}</p>
            <p>Total Score: {totalScore}</p>
          </div>
        )}
      </div>
    </div>
  );
}
