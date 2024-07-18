import React from 'react';
import { Link } from 'react-router-dom';
import CppSidenav from '../../Controls/CppSidenav';


export default function CppVariables() {
    return (
        <div className="cpp-variables"> {/* Replace id with className */}
            <CppSidenav />
            <div>
                <h1 className="Section-header">Using Variables in C++</h1>
                <p className="Section-content">
                    For any programming language, variables are one of the fundamental building blocks with which software is built. A variable can be
                    thought of as a method of information storage that is associated with a name. You can choose a value for the variable to remember during
                    its creation, or you can leave it empty until it's needed. Additionally, variables can be used to manipulate the information that they store,
                    or they can be overwritten with new information if needed. </p>
                <br />
                <div className="Example">
                    <h2>Example 1: Declaring & Printing</h2>
                    <pre>
                        <code>
                            {`//Variable declaration
String weather = "Sunny";
int temp = 70;

//Printing variables
Std::out << "Weather: " << weather << std::endl;
Std::out << "Temperature: " << temp << std::endl;`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`Weather: Sunny
Temperature: 70`}
                        </code>
                    </pre>
                </div>
                <br />

                <p className="Section-content">There are three main components that make up a variable in C++: <div className="Bold-word">Type</div>, <div className="Bold-word">Name</div>,
                    and <div className="Bold-word">Value</div>. In this example, two variables of two different types were created:</p>
                <ul className="Java-lessons">
                    <li><code>weather</code> is the name of a variable that stores a string, or a collection of characters, and it has the value "Sunny"</li>
                    <li><code>temp</code> is the name of a variable that stores an integer, and it has the value 70</li>
                </ul>
                <br />
                <p className="Section-content"> The final lines of this snippet print these variables and display the values they're currently storing, as shown below.
                    The process of creating a variable is known as variable <div className="Bold-word">declaration</div>. When a variable is given a value for
                    the first time, it is known as <div className="Bold-word">initialization</div>.</p>
                <br />
                <p className="Section-content">There are many different variable types depending on what kind of data needs to be stored. Reference the table
                    below to know what type of data each one can be used for:</p>
                <br />
                <table className="Var-table">
                    <tr>
                        <th>Variable Type</th>
                        <th>Storage Size</th>
                        <th>Usage</th>
                    </tr>
                    <tr>
                        <td>boolean</td>
                        <td>1 bit</td>
                        <td>Stores a single true or false value</td>
                    </tr>
                    <tr>
                        <td>byte</td>
                        <td>1 byte</td>
                        <td>Stores a whole value between -128 & 127</td>
                    </tr>
                    <tr>
                        <td>short</td>
                        <td>2 bytes</td>
                        <td>Stores a whole value between -32,768 & 32767</td>
                    </tr>
                    <tr>
                        <td>char</td>
                        <td>2 bytes</td>
                        <td>Stores a single character or ASCII value</td>
                    </tr>
                    <tr>
                        <td>int</td>
                        <td>4 bytes</td>
                        <td>Stores a whole value between -2,147,483,648 & 2,147,483,647</td>
                    </tr>
                    <tr>
                        <td>float</td>
                        <td>4 bytes</td>
                        <td>Stores a decimal value up to 6 digits</td>
                    </tr>
                    <tr>
                        <td>long</td>
                        <td>8 bytes</td>
                        <td>Stores a whole value between -9,223,372,036,854,775,808 & 9,223,372,036,854,775,807</td>
                    </tr>
                    <tr>
                        <td>double</td>
                        <td>8 bytes</td>
                        <td>Stores a decimal value up to 15 digits</td>
                    </tr>
                </table>
                <br />
                <p className="Section-content">It's useful to know the variety of data types available for use, as different types are ideal for different jobs. Let's
                see an example that uses some of these new types.
                </p>

                <div className="Example">
                    <h2>Example 2: integer subtraction</h2>
                    <pre>
                        <code>
                            {`//Variable declaration
short firstVal = -25000;
short secondVal = 20000;
int thirdVal = firstVal - secondVal;

//Printing variables
System.out.println("thirdVal: " + thirdVal);`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`thirdVal:000`}
                        </code>
                    </pre>
                </div>

                <div class="Centered-container">
                    <div class="Centered">
                        <div class="Bottom-buttons">
                            <a href="/Cpp-Modules"><button class="JModule-next">Prev</button></a>
                            <a href="/Cpp-Loops"><button class="JModule-next">Next</button></a>
                        </div>
                    </div>
                </div>

                {/* Add your example image component or markup here */}
            </div>
        </div>
    );
}