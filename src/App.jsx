//definir multiples rutas
import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home.jsx';
import {Inicio} from './pages/Inicio.jsx';
import {Login} from './pages/Login.jsx';

function App() {
 return (
   <Routes>
     <Route path='/' element={<Inicio/>} /> 
     <Route path='/login' element={<Login/>} />
     <Route path='/home' element={<Home/>} />
   </Routes>
 )}

 export default App;
