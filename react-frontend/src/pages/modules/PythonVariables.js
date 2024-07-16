import React from 'react';
import PythonSidenav from '../../Controls/PythonSidenav';

export default function PythonVariables() {
    return (
        <div className="pythonvariables">
            <PythonSidenav />
            <div>
                <h1 className="Section-header">Variables</h1>
                <p className="Section-content">
                    For any programming language, variables are one of the fundamental building blocks with which software is built. A variable can be thought of as a method of information storage that is associated with a name. You can choose a value for the variable to remember during its creation, or you can leave it empty until it's needed. Additionally, variables can be used to manipulate the information that they store, or they can be overwritten with new information if needed.
                </p>
                <br />
                <p>Look at the examples below to understand how variables work in Python:</p>

                <div className="Example">
                    <h2>Example 1: Variable Assignment and Usage</h2>
                    <p>Python allows you to assign values to variables in a straightforward manner:</p>
                    <pre>
                        <code>
                            {`# Variable assignment
name = "Bob"
age = 25

# Printing variables
print("Name:", name)
print("Age:", age)

# Updating variable value
age = 26
print("Updated Age:", age)`}
                        </code>
                    </pre>

                    <p>In this example:</p>
                    <ul>
                        <li><code>name</code> is initially assigned the string <code>"Bob"</code>.</li>
                        <li><code>age</code> is initially assigned the integer <code>25</code>.</li>
                        <li>We print the values stored in these variables using <code>print()</code>.</li>
                        <li>We then update the value of <code>age</code> and print the updated value.</li>
                    </ul>
                </div>

                <div className="Example">
                    <h2>Example 2: Variable Scope</h2>
                    <p>Python variables have a scope that defines where they can be accessed:</p>
                    <pre>
                        <code>
                            {`# Global variable
global_var = "I am global"

def example_function():
    # Local variable
    local_var = "I am local"
    print(local_var)

# Accessing global variable
print(global_var)

# Trying to access local variable outside its scope (will cause an error)
# print(local_var)`}
                        </code>
                    </pre>
                    <p>In this example:</p>
                    <ul>
                        <li><code>global_var</code> is a global variable accessible throughout the program.</li>
                        <li><code>example_function()</code> defines a local variable <code>local_var</code> that is only accessible within the function.</li>
                        <li>We demonstrate accessing both global and local variables and show the scope limitation of local variables outside their function.</li>
                    </ul>
                </div>

                <div className="Example">
                    <h2>Example 3: Variable Types</h2>
                    <p>Python variables can store different types of data:</p>
                    <pre>
                        <code>
                            {`# Variables with different data types
name = "Carol"   # String variable
age = 30         # Integer variable
is_student = True # Boolean variable

# Printing variables with their types
print("Name:", name, "Type:", type(name))
print("Age:", age, "Type:", type(age))
print("Is Student:", is_student, "Type:", type(is_student))`}
                        </code>
                    </pre>
                    <p>In this example:</p>
                    <ul>
                        <li><code>name</code> stores a string value.</li>
                        <li><code>age</code> stores an integer value.</li>
                        <li><code>is_student</code> stores a boolean value.</li>
                        <li>We print each variable along with its type using the <code>type()</code> function.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


