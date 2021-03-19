import React, { Component } from 'react';
import './Portfolio.scss';

class Protfolio extends Component {
    // state = {  }
    render() { 
        return (
            <div id="portfolio">
                <nav id="navbar">
                    <ul>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="https://github.com/oquinone" id="profile-link" target="_blank">Github</a></li>
                    </ul>
                </nav>
                <header id="welcome-section">
                    <h1>Omar Quinones</h1>
                </header>

                {/* <section> */}
                <div id="about">
                    <h2>About<hr/></h2>
                    <p>
                        Future Software Engineer. Graduated from UC Santa Cruz in 2020 with a degree in Computer Science. On my free time
                        I like to lift weights, do yoga, and learn new technologies. Currently I am interested in becoming a full stack engineer.
                    </p>
                </div>

                <div>
                    <h2>Languages</h2><hr/>
                    <p>C++/C, Java, Javascript, Python</p>
                </div>

                <div>
                    <h2>Technologies</h2>
                    <p>React, Sass, HTML, CSS, Bootstrap, Flexbox, git, Agile Principles, Linux/Unix, Firebase</p>
                </div>
                
                <div id="Certifications">
                    <h2>Certificates</h2>
                </div>
                <div id="projects">
                    <div id="Realtime Chatbox" className="project-tile">
                        <h2>Realtime Chatbox</h2>
                    </div>

                    <div id="weather-app" className="project-tile">
                        <h2>Weather App</h2>
                    </div>

                    <div id="Javasccript Calculator" className="project-tile">
                        <h2><a href="https://oquinone.github.io/javascript_calculator/">Javasccript Calculator</a></h2>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Protfolio;