import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SubstackIcon from './SubstackIcon';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/jkenn05/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://substack.com/@jkenn05/posts" target="_blank" rel="noreferrer"><SubstackIcon/></a>
      </div>
      <p>By JJ Kennedy from Seattle ☕️</p>
    </footer>
  );
}

export default Footer;