import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/header';
import Footer from './components/footer';
import AboutMe from './components/aboutMe';
import Contact from './components/contact';
import Project from './components/project';
import Resume from './components/resume';
import Skills from './components/skills.jsx';
import { lightTheme } from './utils/Themes.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

  //displaying app with the elements header, footer, about me, contact, navigation, portfolio, project and resume
// it will render following the path given
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
        <Router>
          <Header />
              <Routes>
              <Route path="/" element={<AboutMe />} />
               <Route path="/contact" element={<Contact />} />
              <Route path="/project" element={<Project />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
           <Footer />
        </Router>
      </ThemeProvider>  
  );
}

export default App;