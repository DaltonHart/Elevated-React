module.exports = `

import React, { Component } from 'react';
import List from './List';

class Home extends Component {
  render() {
    return (
      <div class="home">
        <h1> This is a Homepage!</h1>
        <h2>Thank you for using <b>Elevated React</b>!</h2>
        <p>To get started open the components folder inside the src folder.</p>

        <p>To configure redux you can view the actions, reducers, and store folders.</p>
        <p>See it in action with the <b><em>List</em></b> component.</p>
        <List/>
      </div>
    );
  }
}

export default Home;
`