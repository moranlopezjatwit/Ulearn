import React from 'react';
import { Link } from 'react-router-dom';
import CppSidenav from '../../Controls/CppSidenav';

export default function CppLoops() {
    return (
        <div className="cpp-loops"> {/* Replace id with className */}
            <CppSidenav />
            <div>
                <h1 className="Section-header">Python Loops</h1>
                <p className="Section-content">
                Cpp Loops
                </p>
                <br/>
            </div>
        </div>
    );
}