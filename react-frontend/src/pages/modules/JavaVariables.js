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
                    <h2>Example: </h2>
                    <p>In Java, there are three main components that make up a variables: <div className="Bold-word">Type</div>, <div className="Bold-word">Name</div>, and <div className="Bold-word">Value</div>.</p>
                    <pre>
                        <code>
                            {`# Variable declaration
String fruit = "Apples"
int amount = 5

# Printing variables
System.out.println("Fruit: " + fruit)
System.out.println("Amount: " + amount)`}
                        </code>
                    </pre>
                    <p>In this example, two variables of two different types were created:</p>
                    <ul>
                        <li><code>fruit</code> is the name of a variable that stores a string, and it has the value "Apples"</li>
                        <li><code>amount</code> is the name of a variable that stores an integer, and it has the value 5</li>
                    </ul>
                    <br/>
                    <p>Additionally, the final lines of this snippet print these variables, and display the values they're currently storing, as shown below.</p>
                    <h2>Result:</h2>
                    <pre>
                        <code>
                            {`Fruit: Apples
Amount: 5`}
                        </code>
                    </pre>
                    <p>The process of creating a variable is known as variable <div className="Bold-word">declaration</div>. When a variable is given a value for
                        the firs time, it is known as <div className="Bold-word">initialization</div>.</p>
                    <br/>
                    <p>There are many different variable types depending on what kind of data needs to be stored. Reference the table
                        below to know what type of data each one can be used for:</p>
                    <table className="Var-table">
                        <tr>
                            <th>Variable Type</th>
                            <th>Usage</th>
                        </tr>
                        <tr></tr>
                            <td>int</td>
                            <td>can store whole values between -2,147,483,648 & 2,147,483,647</td>
                        <tr></tr>
                        <td>boolean</td>
                        <td>True / False</td>
                    </table>
                </div>
            </div>
        </div>
    );
}