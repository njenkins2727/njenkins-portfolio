import { AppRoutes } from './routes'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from '../components/Nav';

 const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;