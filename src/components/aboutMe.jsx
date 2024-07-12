import Image from 'react-bootstrap/Image';
import avatar from '../images/adt.jpeg';

function AboutMe() {
  return (
    <>
    <p>&nbsp;</p>
      <h1>Welcome to my portfolio</h1>
      <p>&nbsp;</p>
      <p> As an IT professional with over 15 years in dynamic technical sales
          environments, I currently thrive in current role with the IT Developer Team as a
          CRM-CPW System Support
          Specialist. My career is marked
          by a passion for learning, a dedication to delivering high-quality results, and a
          proven record of helping
          companies achieve their targets.</p>
          <p><br/></p>
      <Image src={ avatar } fluid />;
      <p>&nbsp;</p>
    </>
  );
}

export default AboutMe;

