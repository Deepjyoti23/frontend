import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import EventHandling from './components/EventHandling';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      
      
      <BrowserRouter>
      <Navbar />
        <Routes>  
          <Route path='/' element={<Navigate to='/home' /> } />
          <Route path='Home' element={<Home /> } />
          <Route path='Login' element={<Login />  } />
          <Route path='Signup' element={<Signup />  } />
          <Route path='event' element={<EventHandling  />  } />
          <Route path='profile' element={<Profile />  } />
          

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
