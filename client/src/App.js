import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import {Route } from 'react-router-dom'
import Places from './pages/Places';
import KnowMore from './pages/KnowMore';
import CreatePlace from './pages/CreatePlace';

function App() {
  return (
    <div className="App">

    
    <Route exact path='/' >
    <Navbar></Navbar>
    <Home></Home>
    </Route>
    
    <Route path='/places/:id' >
      <Navbar></Navbar>
      <Places></Places>
    </Route>

    <Route path='/knowmore' >
      <Navbar></Navbar>
      <KnowMore></KnowMore>
    </Route>

    <Route path='/createplace' >
      <Navbar></Navbar>
      <CreatePlace></CreatePlace>
    </Route>


    <Route path='/login'>
    <Login></Login>
    </Route>



    </div>
  );
}

export default App;
