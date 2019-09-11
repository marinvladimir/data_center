import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Machine1 from './components/Machine1';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Machine3 from './components/Machine3';
import Cooler from './components/Cooler';
import Machine2 from './components/Machine2';
import Generator from './components/Generator';
import Cooler_Port1 from './components/Cooler_Port1';
import Cooler_Port2 from './components/Cooler_Port6';
import Cooler_Port3 from './components/Cooler_Port2';
import Cooler_Port4 from './components/Cooler_Port3';
import Cooler_Port5 from './components/Cooler_Port4';
import Cooler_Port6 from './components/Cooler_Port5';
import Rest_Response from './components/Rest_Response';

class App extends Component {
  

  render() {

      return (
      <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <h2 className="titleForm">Performance Monitoring App</h2>
          <Navbar />
          </div>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/Machine1' component={Machine1} />
            <Route path='/Machine2' component={Machine2} />
            <Route path='/Machine3' component={Machine3} />
            <Route path='/Cooler' component={Cooler} />
            <Route path='/Cooler_Port1' component={Cooler_Port1} />
            <Route path='/Cooler_Port2' component={Cooler_Port2} />
            <Route path='/Cooler_Port3' component={Cooler_Port3} />
            <Route path='/Cooler_Port4' component={Cooler_Port4} />
            <Route path='/Cooler_Port5' component={Cooler_Port5} />
            <Route path='/Cooler_Port6' component={Cooler_Port6} />
            <Route path='/Generator' component={Generator} />
            <Route path='/Rest_Response' component={Rest_Response} />
          </div>
          
          </BrowserRouter>
    )}
}

export default App;
