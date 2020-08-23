import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './login/login.css'


class Facebook extends React.Component{
    responseFacebook = (response) => {
      this.props.onFacebook(response,'facebook');
    }
    render(){
      const fbStyle={
        height:"62px !important",
        padding:"calc(.34435vw + 1.38843px) calc(.34435vw + 18.38843px) !important"
      }
      return(
        <div style={fbStyle}>
        <FacebookLogin
          appId="234449021205282"
          fields="name,email,picture"
          callback={this.responseFacebook}
          cssClass="facebook_login"
          // icon="fa-facebook"
        />
        </div>
    )
    }
}

export default Facebook;