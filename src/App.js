import './App.css';
import React, {Component } from "react";
import Navigation from './Components/Navigation/Navigation';
import Application from './Components/Application/Application';
import Slide from './Components/Slide/Slide';
import Contacts from './Components/Contacts/Contacts';
import Clock from './Components/Clock/Clock';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Form from './Components/Form/Form';
import 'tachyons';

class App extends Component {
  constructor(){
    super();
    this.state={
      route: 'home',
    }
  }


//connecting with server
componentDidMount(){
  fetch('http://localhost:3000/')
  .then(response=>response.json())
  .then(console.log)
}

  onRouteChange=(route)=>{
    
    this.setState({route: route});
  }




 render(){
  
    return (
      <div className="App">
        
      
        { this.state.route==='home'?
            <div>
             <Navigation onRouteChange={this.onRouteChange} />
         <Slide />
         <Application onRouteChange={this.onRouteChange} />
         <Contacts />
            </div>
         :(
          this.state.route==='form'?
          <Form onRouteChange={this.onRouteChange}/>
          :this.state.route==='stafflog'?
            <div>
            <Signin  onRouteChange={this.onRouteChange} />
            <Register onRouteChange={this.onRouteChange}/>
            </div>
          :this.state.route==='clock'?
          <Clock onRouteChange={this.onRouteChange}/>:
          this.setState={route:'home'}

         )
       } 
      </div>
    );
  }
}

export default App;