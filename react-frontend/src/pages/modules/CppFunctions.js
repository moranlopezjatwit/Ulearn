import React from 'react';
import { Link } from 'react-router-dom';
import CppSidenav from '../../Controls/CppSidenav';

export default function CppFunctions() {
    return (
        <div className="cpp-functions"> {/* Replace id with className */}
            <CppSidenav />
            <div>
                <h1 className="Section-header">Python Functions</h1>
                <p className="Section-content">
                Cpp Functions
                </p>
                <br/>
            </div>
        </div>
    );
}
