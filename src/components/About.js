import React from 'react';

const About = () => {
  return (
    <div id="about" className="content">
      <div className="aboutme">
        <h2>About Me</h2>
        <p>
          Hello, World! 👋 I'm Shankar, a Software Engineer.
          I am an enthusiastic developer who enjoys building awesome products and loves to get hands-on learning new tools and technologies.
          To gather new experiences and to develop new interests,
        </p>
        <br></br>
        <p>
          Transitioning to development has enabled me to continue my passion for learning and embrace my status as a forever student.
          I love to work as part of a dynamic team and find the challenges that programming brings very exciting!
        </p>
        <br></br>
        <br></br>
        <h2>Skills</h2>
      </div>

      <div className="sector">
        <div className="sector1">
          <p>Programming Languages</p>
          <ul>
            <li>CPP</li>
            <li>JAVA</li>
            <li>PYTHON</li>
            <li>C</li>
          </ul>
        </div>
        <div className="sector2">
          <p>Tools</p>
          <ul>
            <li>Docker</li>
            <li>Postman</li>
            <li>Kubernetes</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>

      <div className="sector">
        <div className="sector1">
          <p>Web Technologies</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>NodeJS</li>
            <li>ReactJS</li>
          </ul>
        </div>
        <div className="sector2">
          <p>DataBases</p>
          <ul>
            <li>MYSQL</li>
            <li>MONGODB</li>
          </ul>
        </div>
      </div>

      <div className="work">
        <h2>Work Experience</h2>
        <ul>
          <li>ZOHO</li>
          <li>COGNIZANT</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
