import React from 'react';
import "./index.css";
import ReactTyped from "react-typed";

function About() {
    return (
        <>
        <div className = "Bg">


        <div className = "Title">
        <h1>
        <ReactTyped strings={["/mahamhjamal"]} typeSpeed={110} />
        </h1>
        </div>

        <div className = "about">
        <p aria-setsize={10} >Software Engineering Student @ the University of Calgary</p>
        <p aria-setsize={10} >(Minor in Biomedical Engineering)</p>
        
        </div>

        <div className = "links"> 
        <li><a href = "https://mhj-resume.tiiny.site" target="_blank"> my resume!</a></li>
        <li><a href = "https://www.linkedin.com/in/maham-jamal-126a04258/" target="_blank"> LinkedIn </a></li>
        <li><a href = "https://www.instagram.com/artbymhj/?hl=en" target="_blank"> my art page </a></li>
        </div>


        
        </div>



        </>
    );
  }
  
  export default About;