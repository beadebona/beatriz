import { AboutMe } from './pages/AboutMe';
import { Contact } from './pages/Contact';
import { Intro } from './pages/Intro';
import { NavBar } from './components/NavBar';
import { Projects } from './pages/Projects';
import { Box } from '@chakra-ui/react';
import { useState } from 'react';

function App() {
  const [fontAbout, setFontAbout] = useState("Inter")
  const [fontProjects, setFontProjects] = useState("Inter")
  const [fontContact, setFontContact] = useState("Inter")

  // const movimentCapture = () =>{
  //   if(window.pageYOffset > 708 && window.pageYOffset < 1430){
  //     setFontAbout("PT Sans")
  //     setFontProjects("Inter")
  //     setFontContact("Inter")
  //   } else if(window.pageYOffset > 1430 && window.pageYOffset < 1960){
  //     setFontAbout("Inter")
  //     setFontProjects("PT Sans")
  //     setFontContact("Inter")
  //   }else if(window.pageYOffset >= 1960){
  //     setFontAbout("Inter")
  //     setFontProjects("Inter")
  //     setFontContact("PT Sans")
  //   }
  // }
  return (
    <Box bg="beige.50">
    <NavBar fontAbout={fontAbout} fontProjects={fontProjects} fontContact={fontContact}/>
    <Intro/>
    <AboutMe />
    <Projects />
    <Contact/>
    
    </Box>
    
  );
}

export default App;
