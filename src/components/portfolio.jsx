import "../App.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import project1 from "../images/project1foodie.png"
//import project2 from "../images/techhive1.png"
//import project3 from "../images/techhive2.png"


function Portfolio() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={project1} />
        <Card.Body>
          <Card.Title>Project 1</Card.Title>
          <Card.Text>
            Text
          </Card.Text>
          <Button variant="primary">GIT HUB LINK</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={project1} />
        <Card.Body>
          <Card.Title>Project 1</Card.Title>
          <Card.Text>
            Text
          </Card.Text>
          <Button variant="primary">GIT HUB LINK</Button>
        </Card.Body>
      </Card>
    </>
  );
}
export default Portfolio;

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)