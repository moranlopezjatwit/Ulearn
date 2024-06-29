import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function Landing() {
    return (
        <div class="Landing">
            <div class="Landing-body">
                <div class="Landing-text-container">
                    <h1 class="Landing-header"> <div class="Landing-title">Welcome to ULearn,</div> a web-based platform designed to offer a personalized and interactive education to prospective programmers</h1>
                    <p class="Landing-text"> <div class="Bold-word">Learn</div> the most popular high-level programming languages, including Java, Python, C++, and more to come</p>
                    <p class="Landing-text"> <div class="Bold-word">Review</div> your knowledge and brush up on core programming concepts</p>
                    <p class="Landing-text"> <div class="Bold-word">Experiment</div> with new and exciting coding concepts using our interactive coding environment</p>
                </div>
                <a href="/Home">
                    <button class="Landing-button">Begin Your Coding Journey</button>
                </a>
            </div>
        </div>
    );
}

