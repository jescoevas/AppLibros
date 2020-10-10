import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { Book } from "./pages/Book";
import '../node_modules/materialize-css/dist/css/materialize.min.css'


function App() {
  return (
    <div className="container">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/search' component={Search}/>
        <Route path='/book/:id' component={Book}/>
      </Switch>
    </div>
  );
}

export default App;
