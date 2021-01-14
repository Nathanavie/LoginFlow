import React from 'react';
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

const LoggingIn = () => {
    return (
      <div id="container" className="faded">
      <div className="form">
        <div className="form-headings">
          <Heading wording="LOGIN" />
          <Paragraph wording="Login with your Gamma cloud telephone account" span="Gamma"/>
        </div>
        <div className="form">
        </div>
        <div className="form-footer">
          <Button buttonType="toggle" />
        </div>
      </div>
      <div id="loadingAnimation">
        {/* <Animation /> */}
        <Paragraph wording="Logging in..." span="..."/>
      </div>
    </div>
    )
}

export default LoggingIn