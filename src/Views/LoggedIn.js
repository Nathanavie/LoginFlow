import React from 'react';
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'

const LoggedIn = () => {
    return (
      <div id="container">
      <div className="loggedInContainer">
        <Heading wording="You are now logged in" />
        <Paragraph wording="Great stuff"/>
      </div>
    </div>
    )
}

export default LoggedIn