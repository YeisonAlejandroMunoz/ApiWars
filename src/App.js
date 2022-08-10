import './App.css';
import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Planetas from './Pages/Planetas'
import Personajes from './Pages/Personajes'
import Home from './Pages/Home'

function App()  {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
