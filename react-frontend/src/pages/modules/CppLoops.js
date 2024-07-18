import React from 'react';
import { Link } from 'react-router-dom';
import CppSidenav from '../../Controls/CppSidenav';

export default function CppLoops() {
    return (
        <div className="cpp-loops"> {/* Replace id with className */}
            <CppSidenav />
            <div>
                <h1 className="Section-header">If Statements & Loops in C++</h1>
                <p className="Section-content">
                    Just as with variables, logic is another foundational piece to any programming language. There are three main conditional statements for
                    C++ that we will be going over: <div className="Bold-word">if statements</div>, <div className="Bold-word">for loops</div>, and <div className="Bold-word"> while loops</div>.
                    Each of these conditionals have their own advantages and use cases, but the majority of complex software ends up making use of all three. By the end
                    of this lesson, you will have a basic familiarity with using these tools, and you will have a good sense for when each of them should be used while
                    coding.
                </p>
                <br />
                <p className="Section-content">
                    Let's begin by looking at if statements. These are statements that check if a given condition is true before executing the code they hold. If the
                    condition is not true, their code never executes. Additionally, an if statement can also have an else statement with alternative code that will
                    execute instead of the original code if the initial condition is not true.
                </p>
                <br />
                <p className="Section-content">
                    There are various operators for expressing logic in a condition:
                </p>
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
                <p className="Section-content">
                    Now let's look at these operators in use
                </p>
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
}
else {
    std::cout << "Student did not pass the exam" << std::endl;
}
`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`Student passed the exam`}
                        </code>
                    </pre>
                </div>
                <br />
                <p className="Section-content">
                    Here we see two different forms of if statement usage: the first if statement has the condition <div className="Italic-word">testGrade {">="} 60</div>, but
                    no alternative code to execute, and will do nothing if the condition is false. The second statement has the condition <div className="Italic-word">passed == true</div>, and one section that will execute if this condition is true,
                    as well as an else section that will execute only if the condition is false. By linking these statements together with related variables, we've combined their
                    simple logic into a more complex behavior.
                </p>
                <br />
                <p className="Section-content">
                Now let's take a look at for loops.
                </p>
                <div className="Example">
                    <h2>Example 2: For Loops</h2>
                    <pre>
                        <code>
                            {`# Variable Declaration                       
int numLoops = 5;

//Loop Execution
for(int i = 0; i < numLoops; i++) {

//Printing Values
std::cout << i << std::endl;
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
                    be executed repeatedly to get a desired result.
                </p>
                <br />
                <p className="Section-content">Moving on, while loops function very similarly to for loops but with certain mechanical differences. Let's take a look
                    at one in execution.
                </p>

                <div className="Example">
                    <h2>Example 3: While Loops</h2>
                    <pre>
                        <code>
                            {`//Variable Declaration         
String display = "";

int limit = 5;
int current = 0;

//Loop Execution
while(current < limit) {
    current++;
    display += "A";
//Printing Values
std::cout << display << std::endl;
}`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`A
AA
AAA
AAAA
AAAAA`}
                        </code>
                    </pre>
                </div>
                <br />
                <p className="Section-content">Just like for loops, while loops will repeatedly execute whatever code they contain within until their condition is 
                    no longer true. What makes them different is that rather than executing a set number of times based on a temporary variable, they can instead refer
                    to one or multiple preexisting variables in its condition. In this example, the while loop checks to see if <code>current</code> is less than <code>limit</code>, and each time the condition is true,
                    the loop increments current by one and adds another 'A' character to the <code>display</code> string. After this, it prints <code>display</code> in the console.
                    Once <code>current</code> has a value greater than or equal to <code>limit</code>, the loop ends.</p>


                <br />
                <div class="Centered-container">
                    <div class="Centered">
                        <div class="Bottom-buttons">
                            <a href="/Cpp-Variables"><button class="Lesson-transition">Prev</button></a>
                            <a href="/Cpp-Functions"><button class="Lesson-transition">Next</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}