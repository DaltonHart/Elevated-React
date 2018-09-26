module.exports = `
import React, { Component } from 'react';
import MyRoutes from './config/routes';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
        {MyRoutes}
        
      </div>
    );
  }
}

export default App;
`