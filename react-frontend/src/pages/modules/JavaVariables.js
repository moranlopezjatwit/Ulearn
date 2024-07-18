import React from 'react';
import { Link } from 'react-router-dom';
import JavaSidenav from '../../Controls/JavaSidenav';


export default function JavaVariables() {
    return (
        <div className="java-variables"> {/* Replace id with className */}
            <JavaSidenav />
            <div>
                <h1 className="Section-header">Using Variables in Java</h1>
                <p className="Section-content">
                    For any programming language, variables are one of the fundamental building blocks with which software is built.
                    A variable can be thought of as a method of information storage that is associated with a name. You can choose a
                    value for the variable to remember during its creation, or you can leave it empty until it's needed. Additionally,
                    variables can be used to manipulate the information that they store, or they can be overwritten with new information if needed.
                </p>
                <br />
                <div className="Example">
                    <h2>Example 1: Declaring & Printing</h2>
                    <pre>
                        <code>
                            {`//Variable declaration
String fruit = "Apples";
int amount = 5;

//Printing variables
System.out.println("Fruit: " + fruit);
System.out.println("Amount: " + amount);`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`Fruit: Apples
Amount: 5`}
                        </code>
                    </pre>
                </div>
                    <br />
                    <p className="Section-content">In Java, there are three main components that make up a variable: <div className="Bold-word">Type</div>, <div className="Bold-word">Name</div>,
                        and <div className="Bold-word">Value</div>. In this example, two variables of two different types were created:</p>
                    <ul className="Java-lessons">
                        <li><code>fruit</code> is the name of a variable that stores a string, and it has the value "Apples"</li>
                        <li><code>amount</code> is the name of a variable that stores an integer, and it has the value 5</li>
                    </ul>
                    <br/>
                    <p className="Section-content"> The final lines of this snippet print these variables and display the values they're currently storing, as shown below.
                        The process of creating a variable is known as variable <div className="Bold-word">declaration</div>. When a variable is given a value for
                        the first time, it is known as <div className="Bold-word">initialization</div>.</p>
                    <br/>
                    <p className="Section-content">There are many different variable types depending on what kind of data needs to be stored. Reference the table
                        below to know what type of data each one can be used for:</p>
                    <br/>
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
                            <td>Stores a whole value between -32,768 & 32,767</td>
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
                    <p className="Section-content">Let's look at some examples of these data types in use.</p>

                    <div className="Example">
                    <h2>Example 2: Integer Addition</h2>
                    <pre>
                        <code>
                            {`//Variable declaration
short firstVal = 32000;
short secondVal = 12000;
int thirdVal = firstVal + secondVal;

//Printing variables
System.out.println("thirdVal: " + thirdVal);`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`thirdVal: 44000`}
                        </code>
                    </pre>
                    </div>
                    <br />
                    <p className="Section-content"> In this example, three variables were created. The first two are shorts that are given discrete values. 
                        The third is an int that adds the values of the previous two variables to get its value. Notice how thirdVal was given the type int.
                        This is because combining the values of firstVal and secondVal results in a value too great to be stored in a variable of the short data type.
                        Now let's look at an example with non-numeric arithmetic.</p>
                    <br />
                <div className="Example">
                    <h2>Example 3: String Addition</h2>
                    <pre>
                        <code>
                            {`//Variable declaration
char c1 = 'H';
char c2 = 'e';
char c3 = 'l';
char c4 = 'o';
char c5 = 'W';
char c6 = 'r';
char c7 = 'd';

String word1 = c1 + c2 + c3 + c3 + c4; 
String word2 = c5 + c4 + c6 + c3 + c7;

//Printing variables
System.out.println(word1 + " " + word2 + "!");`}
                        </code>
                    </pre>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`Hello World!`}
                        </code>
                    </pre>
                </div>
                    <br />
                    <p className="Section-content">Notice how the chars are being added to the string variables. In many cases, arithmetic cannot be done on variables with different
                        types. For example, adding a String to an int is not possible under normal circumstances. However, this addition is valid due to the way Strings
                        are interpreted by the system. Rather than being whole unit, strings in java are merely considered a list of chars. Going by this, adding a
                        char is a valid operation because the char can be appended to the end of the list. </p>
                    <br/>
                    <div class="Centered-container">
                        <div class="Centered">
                            <div class="Bottom-buttons">
                            <a href="/Java-Modules"><button class="Lesson-transition">Prev</button></a>
                            <a href="/Java-Loops"><button class="Lesson-transition">Next</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}