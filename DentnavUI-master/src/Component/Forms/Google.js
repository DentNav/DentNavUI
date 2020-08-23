import React from 'react';

import GoogleLogin from 'react-google-login';

class Google extends React.Component {
  responseGoogle = (response) => {
    this.props.onGoogleResponse(response,'google');
  }
  render() {
    return (
      <div style={{ height: '30px', width: '100%' }}>
        <GoogleLogin
          clientId="901791059645-c94udjhoo4vnedhi4a8sr9g86cdhr2e7.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        /></div>
    )
  }
}

export default Google;