import React, { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext'; // Corrected path
import PythonSidenav from '../../Controls/PythonSidenav';


export default function PythonModules() {
    const { languages } = useContext(LanguageContext);
    const pythonModules = languages.find(lang => lang.name === 'Python').modules;

    return (
        <div className="pythonmodule"> {/* Replace id with className */}
            <PythonSidenav />
            <div>
                <h1 className="Section-header">Python Modules</h1>

                <p className="Section-content">Python is a versatile high-level programming language known for its ease of use and readability. Its straightforward
                    syntax makes it popular among various fields such as web development, data science, artificial intelligence, scientific computing, and
                    automation. What's more, its high level of compatibility with various operating systems allows users to easily create and maintain
                    cross-platform applications. Python's extensive standard library, thriving ecosystem of third-party packages, and vast network of support
                    all make it a popular choice for novice and expert programmers alike!</p>
                <br />
                <p className="Section-content">The lessons included in this module represent your first step toward becoming a seasoned Python programmer. Begin
                    with the variables lesson, and you will be able to steadily progress through the provided material at whatever pace is comfortable to you.</p>
            </div>
        </div>
    );
}


/*               
<ul>
{pythonModules.map((module, index) => (
    <li key={index}>{module}</li>
))}
</ul>*/
