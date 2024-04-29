import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from '../components/Nav/Nav';
import { Home }  from '../components/Home';

 const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Home/>
    </BrowserRouter>
  );
}

export default App;