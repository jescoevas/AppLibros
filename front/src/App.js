import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { Book } from "./pages/Book";
import { SignIn } from "./pages/Signin";
import { SignUp } from "./pages/Signup";
import methods from './assets/Methods'
import '../node_modules/materialize-css/dist/css/materialize.min.css'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {logged:false};  
  }

  componentDidMount(){
    methods.isLogged() ? this.setState({logged:true}) : this.setState({logged:false})
  }

  signIn = (_id) => {
    localStorage.setItem('_id', _id)
    this.setState({logged:true})
  }

  logout = () => {
    localStorage.removeItem('_id')
    this.setState({logged:false})
  }

  render(){
    return (
      <div className="container">
        <Navbar isLogged={this.state.logged} logout={this.logout}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/search' component={Search}/>
            <Route path='/book/:id' component={Book}/>
            <Route path='/signin'><SignIn onSignIn={this.signIn}/></Route>
            <Route path='/signup' component={SignUp}/>
            <Route component={Home}/>
          </Switch>
        </Navbar>
        
      </div>
    );
  }
}

export default App;
