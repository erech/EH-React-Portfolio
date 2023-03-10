import React from 'react';
import Navbar from './navbar.js';
import '../css/about.css';

function About() {
    return (
      <div>
        <Navbar />
        <h1>About Me</h1>
        <p>
          This is about about me! Enjoy the rest of the portfolio. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet leo id risus tincidunt
          egestas. Donec rhoncus elit at elit tincidunt, eu dictum libero laoreet.
        </p>
        <p>
          Sed vehicula fringilla dolor quis vulputate. Suspendisse dictum mauris eu nisl tincidunt, in
          vehicula sapien fringilla. Morbi consectetur libero sit amet ante malesuada dictum. Duis vitae
          luctus dolor.
        </p>
      </div>
    );
  }

  export default About;