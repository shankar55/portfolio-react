import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const githubLink = 'https://github.com/shankar55';
  const linkedinLink = 'https://www.linkedin.com/in/shankar-keerakatta';
  const email = 'shankar511998@gmail.com';

  return (
    <div id="contact" className="contact-container">
      <h2>Contact</h2>
      <p> Feel free to reach out if you have any questions</p>
      <p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x"/> Visit GitHub</a>
      </p>
      <p>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}  size="2x"/> Visit LinkedIn</a>
      </p>
      <p>
        Email: <a href={`mailto:${email}`}> {email}</a>
      </p>
    </div>
  );
};

export default Contact;
