import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About This App</h1>
      <p>
        This is an interactive tool that helps users select the best machine learning models by experimenting with various parameters.
      </p>
      <h2>About the Developer</h2>
      <p><strong>Jaivardhan Shukla</strong><br />
        Final Year Undergraduate, VNIT Nagpur<br />
        Major: Mining Engineering Student<br />
        Email: <a href="mailto:aarshorai22@gmail.com">aarshorai22@gmail.com</a>
      </p>
    </div>
  );
}

export default About;
