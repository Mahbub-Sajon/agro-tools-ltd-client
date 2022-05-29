import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import SignUp from './Pages/SignUp/SignUp';
import MyOrders from './Pages/MyOrders/MyOrders';
import RequireAuth from './Pages/Components/RequireAuth/RequireAuth';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Dashboard from './Pages/Dashboard/Dashboard';
import Review from './Pages/Components/Review/Review';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';

function App() {
  return (
    <div>
       <Navbar></Navbar>
     <Routes>
    <Route path='/' element={<Home></Home>}> </Route>

    <Route path='/my-order' element={
    <RequireAuth>
     <MyOrders></MyOrders>
    </RequireAuth>
    }></Route>

    <Route path='/dashboard' element={
    <RequireAuth>
     <Dashboard></Dashboard>
    </RequireAuth>
    }>
      <Route index element={ <MyOrders></MyOrders>}></Route>
      <Route path='review' element={<Review></Review>}></Route>
    </Route>

    <Route path='/place-order/:id' element={
    <RequireAuth>
     <PlaceOrder></PlaceOrder>
    </RequireAuth>
    }></Route>

    <Route path='/signup' element={<SignUp></SignUp>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/blog' element={<Blog></Blog>}></Route>
    <Route path='*' element={<NotFound></NotFound>}></Route>
    <Route path='/about' element={<About></About>}></Route>
     </Routes>
    </div>
  );
}

export default App;
