import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home }  from '../pages/Home';
import { About } from '../pages/About';
import { Projects } from '../pages/projects';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={ <Home/> } />
      <Route path="/about" element={ <About/> } />
      <Route path="/projects" element={ <Projects/> } />
    </Routes>
  );
}


