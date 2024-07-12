import "bootstrap-icons/font/bootstrap-icons.css";
import ListGroup from 'react-bootstrap/ListGroup';

function Footer() {
  return (
    <footer>
      {['lg'].map((breakpoint) => (
        <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2 text-center">
          <ListGroup.Item><a href="https://github.com/ANUDT/portfolioweek20"><i className="bi bi-github"></i> Github </a></ListGroup.Item>
          <ListGroup.Item><a href="https://linkedin.com/anudt"><i className="bi bi-linkedin"></i> LinkedIn </a></ListGroup.Item>
          <ListGroup.Item><a href="mailto:raswarup@gmail.com"><i className="bi bi-envelope"></i> Email </a></ListGroup.Item>
          <ListGroup.Item><a href="https://twitter.com"><i className="bi bi-twitter-x"></i> Twitter </a></ListGroup.Item>
        </ListGroup>
      ))}
      <div className="footer-copyright text-center py-3">© 2024 Copyright:  <a href="https://adt.com/"> adt.com</a></div>
    </footer>
  );
}

export default Footer;

