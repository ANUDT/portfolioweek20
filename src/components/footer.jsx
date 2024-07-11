import "../footer.css";
function Footer() {
  return (
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about"> 
          <p>
            MyPortfolio showcases the projects and achievements of a dedicated web developer and designer.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp;<span></span>00000</span>
            <span><i className="fas fa-envelope"></i> &nbsp;<span></span> info@myportfolio.com</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fab GITHUB"></i></a>
            <a href="#"><i className="fab LINKED-IN"></i></a>
            <a href="#"><i className="EMAIL"></i></a>
          </div>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact Me</h2>
          <form action="index.html" method="post">
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
            <textarea name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
            <button type="submit" className="btn btn-big">
              <i className="fas fa-envelope"></i>
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom"></div>
      &copy; adt.com | Designed by Me

      <div className="footer-section links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;