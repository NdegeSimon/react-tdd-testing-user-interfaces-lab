// src/App.js
import React from "react";

function App() {
  return (
    <div>
      <h1>Hi, I'm [Your Name]</h1>
      
      <img 
        src="your-image.jpg" 
        alt="Portrait of [Your Name]"
      />
      
      <h2>About Me</h2>
      <p>
        [Your biography text goes here. Write a short paragraph about yourself, 
        your skills, and your professional background.]
      </p>
      
      <div>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default App;