import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { expertise } from '../data/value.jsx';

function Resume() {
  return (
    <Container fluid>
      <Row>
        <Col><>
          <h1>Resume</h1>
          <Card>
            <Card.Body>
              <Card.Title>My CV</Card.Title>
              <Card.Text><a href=""><i className="bi bi-file-person-fill"></i> download link</a></Card.Text> 
            </Card.Body>
          </Card>
        </>1 of 1</Col>
      </Row>
      <br /><br />
      <h1>Proficiencies</h1>
      {expertise.map((section) => (
        <div key={section.title}>
          <h2>{section.title}</h2>
          <Row xs={1} md={2} lg={5} className="g-4">
            {section.skills.map((skill, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={skill.image} />
                  <Card.Body>
                    <Card.Title>{skill.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
      <br/><br/>
    </Container>


  );
}

export default Resume;




