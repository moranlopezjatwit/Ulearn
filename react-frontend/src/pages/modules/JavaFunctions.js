import React from 'react';
import { Link } from 'react-router-dom';
import JavaSidenav from '../../Controls/JavaSidenav';

export default function PythonFunctions() {
    return (
        <div className="java-functions"> {/* Replace id with className */}
            <JavaSidenav />
            <div>
                <h1 className="Section-header">Functions</h1>
                <p className="Section-content">
                </p>
                <br />
            </div>
        </div>
    );
}
