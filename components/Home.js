module.exports = `

import React, { Component } from 'react';
import List from './List';

class Home extends Component {
  render() {
    return (
      <div class="home">
        <h1>Homepage</h1>
        <List/>
      </div>
    );
  }
}

export default Home;
`