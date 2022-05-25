import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Components/Login/Login';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
       <Navbar></Navbar>
     <Routes>
    <Route path='/' element={<Home></Home>}> </Route>
    <Route path='/login' element={<Login></Login>}></Route>
     </Routes>
    </div>
  );
}

export default App;
