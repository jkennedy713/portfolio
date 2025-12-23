import React, { useEffect } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SubstackIcon from './SubstackIcon';
import headshotImage from '../assets/images/Headshotcopy.png';
import bgDarkImage from '../assets/images/bg-dark.png';
import '../assets/styles/Main.scss';

function Main() {
  useEffect(() => {
    // Preload background image to prevent offset flash
    const img = new Image();
    img.src = bgDarkImage;
  }, []);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={headshotImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/jkenn05/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://substack.com/@jkenn05/posts" target="_blank" rel="noreferrer"><SubstackIcon/></a>
          </div>
          <h1>Jeffrey Kennedy</h1>
          <p>Product Manager</p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/jkenn05/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://substack.com/@jkenn05/posts" target="_blank" rel="noreferrer"><SubstackIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;