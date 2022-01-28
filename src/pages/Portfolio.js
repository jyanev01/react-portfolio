import React from "react";
import Project from '../components/Project';

export default function Portfolio() {

    return(
        <ul>
            <Project 
            name="Run Buddy" 
            link="https://jyanev01.github.io/Run-Buddy/" 
            description = "HTML/CSS"
            image="./assets/images/hero-bg.jpg"
            />

            <Project name="Second Pro" link = "test"
            />

            <Project name="Second Pro" link = "test"
            />

        </ul>
    );
}