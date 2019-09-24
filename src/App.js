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
            <Route exact path='/data_center/' component={Home} />
            <Route path='/data_center/Home/' component={Home} />
            <Route path='/data_center/Machine1' component={Machine1} />
            <Route path='/data_center/Machine2' component={Machine2} />
            <Route path='/data_center/Machine3' component={Machine3} />
            <Route path='/data_center/Cooler' component={Cooler} />
            <Route path='/data_center/Generator' component={Generator} />
            <Route path='/data_center/Rest_Response' component={Rest_Response} />
          </div>
          
          </BrowserRouter>
    )}
}

export default App;
