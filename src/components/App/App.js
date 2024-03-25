// npm install react-router-dom
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Entete from '../Entete/Entete';
import Accueil from '../Accueil/Accueil';
import FilmGhibli from '../FilmGhibli/FilmGhibli';

import './App.css';


function App() {
  // const location = useLocation();
    // useEffect(() =>{

    // }, []);

 
  return (
    <Router>
      <Entete/>
      <Routes>
        <Route path="/" element= {<Accueil/>} />
        <Route path="/film/:id" element= {<FilmGhibli/>} />
        <Route path="/*" element={<Accueil />}/> 
      </Routes>
    </Router>

  );
}

export default App;
