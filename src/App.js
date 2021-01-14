import React from 'react';
import './App.css';

import LoggedOut from './Views/LoggedOut'
import LoggedIn from './Views/LoggedIn'
import LoggingIn from './Views/LoggingIn'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: "loggedIn"
    }
  }

  submitLogin = () => {
    // this.setState({
    //   loggedIn: 'progress'
    // })
    console.log('here');
  }

  render() {
    let {loggedIn} = this.state
    if(loggedIn === "loggedOut") {
      return (
       <LoggedOut submitFunction={this.submitLogin} />
      );
    } else if(loggedIn === "loggedIn") {
      return (
        <LoggedIn />
      )
    } else {
      return(
        <LoggingIn />
      )
    }
  }
}

export default App;
