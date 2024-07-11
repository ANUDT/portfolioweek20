import "../App.css";
import project1 from "../images/adt.jpeg"
import project2 from "../images/modern computer.jpeg"
import project3 from "../images/hacking.jpeg"
import { expertise } from "../data/value.jsx"

function Skills() {
  return (
    <main>
      <div>
            <h1>Skills</h1>
            <div className="skills-container">
                {expertise.map(item => (
                    <div key={item.skills.name}>
                        <h2>{item.title}</h2>
                        <div>
                        {item.skills.map((skill, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={skill.image} alt={skill.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                    </div>
                ))}
            </div>
        </div>



     <div className="project container">
          <a href= "Github.com"><img src={project1} className="project item"/>Project 1</a>
          <a href= "Github.com"><img src={project2} className="project item"/>Project 2</a>
          <a href= "Github.com"><img src={project3} className="project item"/>Project 3</a>
        </div>
    </main>
  );
}

export default Skills;