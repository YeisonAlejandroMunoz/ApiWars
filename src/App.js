import './App.css';
import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Planetas from './Pages/Planetas'
import Personajes from './Pages/Personajes'
import Home from './Pages/Home'

function App()  {
  return (
    <Routes>
      <Route path='/' element={ <Home/> }></Route>
      <Route path='/Personajes' element={ <Personajes/> }></Route>
      <Route path='/Planetas' element={ <Planetas/> }></Route>

    </Routes>
  );
}

export default App;
