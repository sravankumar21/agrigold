import React from 'react';
import '../styles/AgrigoldIntroduction.css'; // Import your CSS file for styling
import imgagri from '../images/aboutintro.jpeg'

const AgrigoldIntroduction = () => {
  return (
    <div className="introduction-container">
      <div className="content">
        <h2>Our Introduction</h2>
        <h3>Who We Are</h3>
        <p>
          Agrigold is a leading agricultural company committed to enhancing
          farmers' productivity and profitability through innovative solutions.
          With our headquarters in [Location], we have established a strong
          presence in the agricultural sector over the past [X] years. Our
          diverse range of products and services are tailored to meet the
          unique needs of farmers in [Number] countries, supported by a robust
          network of dealers and distributors.
        </p>
        <h3>OUR PROPOSITION</h3>
        <ul>
          <li>More Crop Per Drop.®</li>
          <li>Transforming Lives; Enhancing Prosperity.</li>
          <li>Creating Shared Values</li>
          <li>Doing Well By Doing Good.</li>
        </ul>
        <h3>Watch our video</h3>
        <p>Water is Life - Corporate Movie</p>
      </div>
      <div className="image-container">
        <div className="green-background"></div>
        <img src={imgagri} alt="Agrigold" />
      </div>
    </div>
  );
};

export default AgrigoldIntroduction;
