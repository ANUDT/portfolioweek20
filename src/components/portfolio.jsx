import "../App.css";
import project1 from "../../image/logo/project1foodie.png"
import project2 from "../../image/logo/techhive1.png"
import project3 from "../../image/logo/techhive2.png"


function Portfolio() {
  return (
    <main>
      <div className="project container">
        <a href= "Github.com"><img src={project1} className="project item"/>Project 1</a>
        <a href= "Github.com"><img src={project2} className="project item"/>Project 2</a>
        <a href= "Github.com"><img src={project3} className="project item"/>Project 3</a>
    </div>
    </main>
  );
}

export default Portfolio;