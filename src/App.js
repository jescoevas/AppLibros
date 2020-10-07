import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'


function App() {
  return (
    <div className="container">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
