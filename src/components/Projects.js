import React from 'react';
import './Projects.css';

const Projects = () => (
  <section id="projects">
    <div className="projects">
      <h1>Projects</h1>
      <ul>
        <li>
          <a href="https://kswanand02.github.io/Alibag_Darshan/" target="_blank" rel="noopener noreferrer">
            Alibag Darshan (Tour Guide)
          </a>
        </li>
        {/* <li>
         <a href="https://kswanand02.github.io/Image_Slider_02/" target="_blank" rel="noopener noreferrer">
            Image Slider
          </a> 
        </li> */}
        <li>
          <a href="https://kswanand02.github.io/ToDo_List/" target="_blank" rel="noopener noreferrer">
            To-Do List
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Projects;
