import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Admin from './Components/Admin';
import Login from './Components/Login';


function App() {
  return (
    <>
      <Routes>
        <Route exact path = "/" element = {<Home />} />
        <Route exact path = "/admin" element = {<Admin />} />
        <Route exact path = "/login" element = {<Login />} />
      </Routes>
    </>
  );
}

export default App;
