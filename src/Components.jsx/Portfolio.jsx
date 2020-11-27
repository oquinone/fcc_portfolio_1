import React, { Component } from 'react';

class Protfolio extends Component {
    // state = {  }
    render() { 
        return (
            <div id="portfolio">
                <nav id="navbar">
                    <div>
                        <a href="#projects">Projects</a>
                    </div>
                    <div>
                        <a id="profile-link" href="https://github.com/oquinone/" target="_blank">Github</a>
                    </div>
                </nav>

                <section id="welcome-section">
                    <div>
                        <h1>Hey I'm Omar</h1>
                        <small><i>Software Engineer · </i></small>
                        <small><i>Weight Lifter · </i></small>
                        <small><i>Runner</i></small>
                    </div>
                </section>
                <div id="hr-section"></div>
                <section id="projects">
                    <div className="project-tile">
                        <a href="www.google.com">Calculator</a>
                    </div>
                    <div className="project-tile">
                        <a href="www.google.com">Client</a>
                    </div>
                    <div className="project-tile">
                        <a href="www.google.com">Test</a>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default Protfolio;