import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
     <h1>Hello Bro</h1>
     <button class="btn btn-primary">Button</button>
     <Routes>
    <Route path='/' element={<Home></Home>}> </Route>

     </Routes>
    </div>
  );
}

export default App;
