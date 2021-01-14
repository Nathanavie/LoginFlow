import React from 'react';
import './App.css';

import Background from './components/Background'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import Button from './components/Button'
import Form from './components/Form'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: "false"
    }
  }

  render() {
    let {loggedIn} = this.state
    if(loggedIn == "false") {
      return (
        <div id="container">
          <div class="form">
            <Heading wording="LOGIN" />
            <Paragraph wording="Login with your Gamma cloud telephone account" span="Gamma"/>
            <Form />
            <Button buttonType="toggle" />
          </div>
          <div class="background">
            <Background />
          </div>
        </div>
      );
    } else if(loggedIn) {
      return (
        <div id="container">
          <div class="form">
            <Heading wording="You are now logged in" />
            <Paragraph wording="Great stuff"/>
          </div>
          <div class="background">
            <Background />
          </div>
        </div>
      )
    }
  }
}

export default App;
