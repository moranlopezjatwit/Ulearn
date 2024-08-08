import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import JavaSidenav from '../../Controls/JavaSidenav';

export default function JavaLoops() {
    const { user, setProgress } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            if (user) {
                saveProgress();
            }
        };
    }, []);

    const saveProgress = async () => {
        const moduleScore = 50; // Example score for this module

        try {
            const res = await axios.post('http://localhost:5000/api/progress/save', {
                module: 'JavaLoops',
                score: moduleScore,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setProgress((prevProgress) => [
                ...prevProgress.filter(p => p.module !== 'JavaLoops'),
                { module: 'JavaLoops', score: moduleScore, lastAccessed: new Date() }
            ]);
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    };

    const handleNext = async () => {
        await saveProgress();
        navigate('/Java-Functions'); // Redirect to the next lesson
    };

    return (
        <div className="java-loops">
            <JavaSidenav />
            <div>
                <h1 className="Section-header">If Statements & Loop logic</h1>
                <p className="Section-content">
                    Just as with variables, logic is another foundational piece to any programming language. There are three main conditional statements for 
                    Java that we will be going over: <div className="Bold-word">if statements</div>, <div className="Bold-word">for loops</div>, and <div className="Bold-word"> while loops</div>.
                    Each of these conditionals have their own advantages and use cases, but the majority of complex software ends up making use of all three. By the end 
                    of this lesson, you will have a basic familiarity with these conditionals, and you will have a good sense for when each of them should be used while
                    coding.
                </p>
                <br/>
                <p className="Section-content">
                    Let's begin by looking at if statements. These are statements that check if a given condition is true before executing the code they hold. If the
                    condition is not true, their code never executes. Additionally, an if statement can also have an else statement with alternative code that will
                    execute instead of the original code if the condition is not true.
                </p>
                <div className="Example">
                    <h2>Example 1: If / Else</h2>
                    <pre>
                        <code>
                            {`//Variable declaration
int numPeople = 5;
int numApples  = 7;

bool enoughApples;


if(numApples >= numPeople) {
    enoughApples = true;
}
else {
    enoughApples = false;
}

//Printing variables
System.out.println(enoughApples);`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`true`}
                        </code>
                    </pre>
                </div>
                <br />
                <p className="Section-content">Let's break this example down into the components at work. First, we created two integer variables and one
                    boolean variable. Remember, a boolean can only equal either true or false. Then, we executed an if statement, with the condition <div className="Italic-word">numApples >= numPeople</div>.
                    This condition checks to see if the value of numApples is greater than or equal to the value of numPeople. Because this condition is true, it execcutes the code inside,
                    and the value of enoughApples becomes true. If numApples had a value less than that of numPeople, the else statement would have executed instead, and
                    enoughApples would have become false.</p>
                <br />
                <p className="Section-content">There are various logical operators that can be used when creating condition statements:</p>

                <br />
                <table className="Var-table">
                    <tr>
                        <th>Operator</th>
                        <th>Usage</th>
                    </tr>
                    <tr>
                        <td><span>{">"}</span></td>
                        <td>Checks that one value is greater than another</td>
                    </tr>
                    <tr>
                        <td><span>{"<"}</span></td>
                        <td>Checks that one value is less than another</td>
                    </tr>
                    <tr>
                        <td>==</td>
                        <td>Checks that two values are equivalent to one another</td>
                    </tr>
                    <tr>
                        <td>&&</td>
                        <td>Appends multiple conditions; will be true only if both conditions are true</td>
                    </tr>
                    <tr>
                        <td>||</td>
                        <td>Appends multiple conditions; will be true if at least one of the conditions is true</td>
                    </tr>
                </table>
                <br />
                <p className="Section-content"> Let's look at another example using these operators.</p>

                <div className="Example">
                    <h2>Example 2: Using &&</h2>
                    <pre>
                        <code>
                            {`//Variable declaration
int temperature = 95;
bool rainy = false;


bool beachDay;


if(temperature > 85 && rainy == false) {
    beachDay = true;
}
else {
    beachDay = false;

//Printing variables
System.out.println(beachDay);`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`true`}
                        </code>
                    </pre>
                </div>
                <br/>
                <p className="Section-content">In this example, the condition is <div className="Italic-word">temperature {">"} 85 && rainy == false</div>. It is
                    checking if temperature is greater than 85 and if rainy is false. The overall condition will only be true if both of these subconditions are true.
                    If either one or both of them are false then the else statement will be executed instead.</p>
                <br />
                <p className="Section-content">Now let's look at an example of a for loop.</p>

                <div className="Example">
                    <h2>Example 3: For Loops</h2>
                    <pre>
                        <code>
                            {`// Variable Declaration                       
int numLoops = 5;

//Loop Execution
for(int i = 0; i < numLoops; i++) {

//Printing Values
System.out.println(i);
}`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`0
1
2
3
4`}
                        </code>
                    </pre>
                </div>
                <br />
                <p className="Section-content">The parameters of a for loop are a bit more complex than that of an if statement, since it's comprised of 3 parts,
                    so let's look at it piece by piece. <div className="Italic-word">int i = 0</div> is a declaration for a temporary variable i that stops existing when
                    the for loop completes its execution. <div className="Italic-word">i {"<"} numLoops</div> is the condition that must be true for the loop's code to execute.
                    So long as the value of i is less than the value of numLoops, the code within will be executed until the condition returns false. The final
                    piece, <div className="Italic-word">i++</div> increments the value of i by 1 each time the loop executes. This means that after the first execution, the
                    value of i increases from 0 to 1, then on the second execution it increases to 2, and so on. For loops are incredibly helpful for code that needs to
                    be executed multiple times in a program.</p> 
                <br />
                <p className="Section-content">Finally, let's discuss while loops.</p>
                <div className="Example">
                    <h2>Example 4: While Loops</h2>
                    <pre>
                        <code>
                            {`//Variable Declaration         
int apples = 10;
int applesEaten = 0;

bool hungry = true;

//Loop Execution
while(hungry) {
    apples--;
    applesEaten++;
    if(applesEaten >= 5){
        hungry = false;
    }
//Printing Values
System.out.println("Apples Remaining: " + apples);
}`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`Apples Remaining: 9
Apples Remaining: 8
Apples Remaining: 7
Apples Remaining: 6
Apples Remaining: 5`}
                        </code>
                    </pre>
                </div>
                <br />
                <p className="Section-content">While loops operate very similarly to for loops, in that they will repeatedly execute their code until their condition
                    is no longer true. What makes them different is that rather than executing a set number of times based on a temporary variable, they can instead refer
                    to a preexisting variable in its condition. In this example, the while loop checks to see if hungry is true, and each time it is, the loop decrements apples
                    by one, increments applesEaten by one, and then executes an if statement to see if hungry should be changed to false. After this, it prints to console the
                    number of remaining apples. Once enough apples have been eaten, hungry is set to false and the loop ends.</p>

                <div className="Centered-container">
                    <div className="Centered">
                        <div className="Bottom-buttons">
                            <Link to="/Java-Variables"><button className="Lesson-transition">Prev</button></Link>
                            <Link to="/Java-Loops-Test"><button className="Lesson-transition">Exercises</button></Link>
                            <button onClick={handleNext} className="Lesson-transition">Next</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

