import "../App.css";
import project1 from "../../image/adt.jpeg";
import project2 from "../../image/modern computer.jpeg";
import project3 from "../../image/hacking.jpeg";
import { bio } from "../data/value.jsx";

function BioData() {
  return (
    <main>
      <div>
        <h1>Bio-data</h1>
        <div className="bios-container">
          {bio.map((bio) => (
            <div key={bio.id} className="bio-card">
              <h2>{bio.name}</h2>
              <p><strong>Roles:</strong> {bio.roles}</p>
              <p><strong>Description:</strong> {bio.description}</p>
              <p><strong>GitHub:</strong> <a href={bio.github} target="_blank" rel="noopener noreferrer">{bio.github}</a></p>
            </div>
          ))}
        </div>
        <div className="bio-container">
          <a href="https://github.com/ANUDT" target="_blank" rel="noopener noreferrer">
            <img src={project1} className="bio-item" alt="Bio 1" />
            Bio 1
          </a>
          <a href="https://github.com/ANUDT" target="_blank" rel="noopener noreferrer">
            <img src={project2} className="bio-item" alt="Bio 2" />
            Bio 2
          </a>
          <a href="https://github.com/ANUDT" target="_blank" rel="noopener noreferrer">
            <img src={project3} className="bio-item" alt="Bio 3" />
            Bio 3
          </a>
        </div>
      </div>
    </main>
  );
}

export default BioData;


