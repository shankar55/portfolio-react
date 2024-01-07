import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import profile from './profile.jpg';

const Home = () => {
  const imgStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  return (
    <div id="home" className="centered-content">
      <img src={profile} alt="profile" style={imgStyle} />
      <h1>Shankar</h1>
      <p>Software Engineer</p>
      <p>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> India
      </p>
    </div>
  );
};

export default Home;
