import React from 'react';
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Form from '../components/Form'
import Button from '../components/Button'
import Background from '../components/Background'

const LoggedOut = props => {
    return (
        <div id="container">
          <div className="form">
            <div className="form-headings">
              <Heading wording="LOGIN" />
              <Paragraph wording="Login with your Gamma cloud telephone account" span="Gamma"/>
            </div>
            <div className="form-inputs">
              <Form submitFunction={props.submitFunction} />
            </div>
            <div className="form-footer">
              <Paragraph wording="Remember my password" />
              <Button buttonType="toggle" />
            </div>
          </div>
          <div className="background">
            <Background />
          </div>
        </div>
    )
}

export default LoggedOut