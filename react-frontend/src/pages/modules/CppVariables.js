import React from 'react';
import { Link } from 'react-router-dom';
import CppSidenav from '../../Controls/CppSidenav';


export default function CppVariables() {
    return (
        <div className="cpp-variables"> {/* Replace id with className */}
            <CppSidenav />
            <div>
                <h1 className="Section-header">Variables</h1>
                <p className="Section-content">
                Cpp Variables
                </p>
                <br/>
                {/* Add your example image component or markup here */}
            </div>
        </div>
    );
}