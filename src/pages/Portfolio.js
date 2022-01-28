import React from "react";
import Project from '../components/Project';

export default function Portfolio() {

    return(
        <ul>
            <Project 
            name="Run Buddy" 
            link="https://jyanev01.github.io/Run-Buddy/" 
            description = "HTML/CSS"
            image="../assets/images/hero-bg.jpg"
            />

            <Project 
            name="Pokegen" 
            link="https://desolate-ridge-10974.herokuapp.com/" 
            description = "Full-Stack Generator"
            image='../assets'
            />

            <Project 
            name="Cocktail Finder" 
            link="https://jyanev01.github.io/Cocktail_Finder/" 
            description = "HTML/CSS/JavaScript"
            image="../assets/images/deployed1.png"
            />

        </ul>
    );
}