import './App.css';
import {  Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Planetas from './Pages/Planetas'
import Personajes from './Pages/Personajes'
import Home from './Pages/Home'
import DetallePerson from './Pages/DetallePerson';

function App()  {
  return (
    <Routes>
      <Route path='/' element={ <Home/> }></Route>
      <Route path='/Personajes' element={ <Personajes/> }></Route>
      <Route path='/Planetas' element={ <Planetas/> }></Route>
      <Route path='/Planetas/:url' element={ <Planetas/> }></Route>
      <Route path='/DetallePerson/' element={ <DetallePerson/> }></Route>
      <Route path='/DetallePerson/:url' element={ <DetallePerson/> }></Route>
    </Routes>
  );
}

export default App;
