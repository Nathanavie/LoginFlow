import React from 'react';
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Background from '../components/Background'

const LoggedIn = () => {
    return (
      <div id="container">
      <div className="form">
        <Heading wording="You are now logged in" />
        <Paragraph wording="Great stuff"/>
      </div>
      <Background class="background"/>
    </div>
    )
}

export default LoggedIn