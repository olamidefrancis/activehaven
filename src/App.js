import './App.css';
import React, { Component } from 'react';

import Clock from './Components/Clock';
import Signin from './Components/Signin';
import Form from './Components/Form';
import 'tachyons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Signup from './Components/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
    };
  }

  //connecting with server
  componentDidMount() {
    fetch('https://activehavent.herokuapp.com/')
      .then((response) => response.json())
      .then(console.log);
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <Routes>
            <Route path='activehavent.herokuapp.com/' index exact element={<Home />} />
            <Route path='activehavent.herokuapp.com/signin' element={<Signin />} />
            <Route path='activehavent.herokuapp.com/signup' element={<Signup />} />
            <Route path='activehavent.herokuapp.com/clock' element={<Clock />} />
            <Route path='activehavent.herokuapp.com/support' element={<Form />} />
          </Routes>
        </Router>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
