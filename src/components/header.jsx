import styles from '../header.css?inline';

function Header() {
  return (
    <div className={styles.App}>;
      <header>
      <h1>ANU DT</h1>
      <nav>
        <ul>
          <li>
            <a href="/">ABOUT ME </a>
          </li>
          <li>
            <a href="/project">PROJECTS </a>
          </li>
          <li>
            <a href="/skills">SKILLS </a>
          </li>
          <li>
            <a href="/">EXPERIENCE </a>
          </li>
          <li>
            <a href="/">EDUCATION </a>
          </li>
        </ul>
      </nav>
    </header>
    </div>
)}

export default Header;