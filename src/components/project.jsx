import "../App.css";
import project1 from "../images/adt.jpeg"
import project2 from "../images/modern computer.jpeg"
import project3 from "../images/hacking.jpeg"
import { project } from "../data/value.jsx"

function Project() {
  return (
    <main>

      <div>
        <h1>Projects</h1>
        <div className="projects-container">
          {project.map(project => (
            <div key={project.id} className="project-card">
              <h2>{project.title}</h2>
              <p><strong>Date:</strong> {project.date}</p>
              <p><strong>Description:</strong> {project.description}</p>
              <p><strong>GitHub:</strong> <a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a></p>
              {project.presentation && (
                <p><strong>Presentation:</strong> <a href={project.presentation} target="_blank" rel="noopener noreferrer">{project.presentation}</a></p>
              )}
              <p><strong>Tags:</strong> {project.tags.join(', ')}</p>
              <p><strong>Skills:</strong> {project.skills.join(', ')}</p>
              {project.doc && (
                <p><strong>Documentation:</strong> <a href={project.doc} target="_blank" rel="noopener noreferrer">{project.doc}</a></p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="project container">
        <a href="Github.com"><img src={project1} className="project item" />Project 1</a>
        <a href="Github.com"><img src={project2} className="project item" />Project 2</a>
        <a href="Github.com"><img src={project3} className="project item" />Project 3</a>
      </div>
    </main>
  );
}

export default Project;