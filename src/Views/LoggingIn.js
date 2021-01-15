import React from 'react';
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import Background from '../components/Background'
import Animation from '../components/Animation'

const LoggingIn = props => {

    React.useEffect( () => {
      setTimeout(props.nowLogIn,5000);
    })

    return (
      <div id="container">
      <div className="formContainer">
        <div className="form-headings">
          <Heading wording="LOGIN" />
          <Paragraph wording="Login with your Gamma cloud telephone account" span="Gamma" class="intro"/>
        </div>
        <div id="loadingAnimation">
        <Animation item="bubble"/>
        <Animation item="dots"/>
      </div>
        <div className="form-footer faded">
          <Paragraph wording="Remember my password" />
          <Button buttonType="toggle" />
        </div>
      </div>
      <Background class="background"/>
      
    </div>
    )
}

export default LoggingIn