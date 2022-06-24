import { AboutMe } from './pages/AboutMe';
import { Contact } from './pages/Contact';
import { Intro } from './pages/Intro';
import { NavBar } from './components/NavBar';
import { Projects } from './pages/Projects';


function App() {
  return (
    <>
    <NavBar/>
    <Intro/>
    <AboutMe/>
    <Projects/>
    <Contact/>
    </>

  );
}

export default App;
