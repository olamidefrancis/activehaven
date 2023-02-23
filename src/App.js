import './App.css';
import React, { Component } from 'react';

import Clock from './Components/Clock';
import Signin from './Components/Signin';
import Form from './Components/Form/Form';
import 'tachyons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Signup from './Components/Signup';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
    };
  }

  //connecting with server
  componentDidMount() {
    fetch('http://localhost:3000/')
      .then((response) => response.json())
      .then(console.log);
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    return (
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' index exact element={<Home />} />
            <Route path='signin' element={<Signin />} />
            <Route path='signup' element={<Signup />} />
            <Route path='clock' element={<Clock />} />
            <Route path='support' element={<Form />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
