import "../App.css";
import Image from 'react-bootstrap/Image';
import avatar from '../images/adt.jpeg';

function AboutMe() {
  return (
    <>
      <h1>Hi I am Anu DT</h1>
      <p> As an experienced IT professional with over 15 years in dynamic technical sales environments, I currently thrive in current role with the IT Developer Team as a CRM-CPW System Support Specialist. My career is marked by a passion for learning, a dedication to delivering high-quality results, and a proven record of helping companies achieve their targets.</p>
      <Image src={ avatar } fluid />;
    </>
  );
}

export default AboutMe;

// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them
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