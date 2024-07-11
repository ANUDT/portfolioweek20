import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import AboutMe from './components/aboutMe';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


  //displaying app with the elements header, footer, about me, contact, navigation, portfolio, project and resume
// it will render following the path given
function App() {
  return (

        <Router>
          <Header />
              <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/aboutme" element={<AboutMe />} />              
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
           <Footer />
        </Router>
     
     );
}

export default App;