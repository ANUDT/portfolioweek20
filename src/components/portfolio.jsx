import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { project } from '../data/value';

function Portfolio() {
  const cardStyle = {
    marginBottom: '20px',
    marginTop: '20px'
  };


  return (

    <>
      {project.map((project, index) => (
        <Card key={index} style={cardStyle}>
          <Card.Img variant="top" src={project.imageUrl} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Button variant="primary" href={project.github}>Github Link</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Portfolio;


