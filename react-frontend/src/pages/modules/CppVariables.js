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
                <br/>
                {/* Add your example image component or markup here */}
            </div>
        </div>
    );
}