import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Google from './Google';
import Facebook from './Facebook';
import '../Forms/signup/signup.css';
import { withRouter } from 'react-router';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignUp extends React.Component{

    constructor(props) {
    super(props);
    this.state = {
      firstName: 'Aravindh',
      lastName: 'S',
      email: 'aravindhtechie@gmail.com',
      password: 'N@shrath8488',
      errors: {

      },
      isPremiumAccess:false
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

    onInputChange(event, type) {
    this.setState({
      [type]: event.target.value
    });
  }

  validateInput = () => {
    let fields = this.state;
    let errors = {};
    let formIsValid = true;

    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "*Please enter your First name.";
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstName"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "*Please enter your Last name.";
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastName"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password which contains one Capital alphabet, Numbers and one special character.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  onSocialLogin = (response,type) => {
    console.log("in sign up");
    if(type === "google"){
      let surname =  response.profileObj.familyName ? response.profileObj.familyName : null;
      this.setState({
        firstName: response.profileObj.givenName,
        lastName: surname,
        email: response.profileObj.email
      })
    }
    else{
      var nameArray = [];
      nameArray = response.name.split(" ");
      this.setState({
        firstName: nameArray[0],
        lastName: nameArray[1],
        email: response.email
      })
    }
    console.log("in sign up", this.state);
    this.onPremiumAccess();
  }

  handleSubmit(event) {
    this.setState({
      errors:{}
    })
    event.preventDefault();
    const err = this.validateInput();
    if (err) {
      console.log("submit is clicked", this.state);
      this.onPremiumAccess();
    }
    else {
      console.log("error", this.state);
    }
  }

  onPremiumAccess(){
    if(this.state.isPremiumAccess){
    this.props.history.push({ pathname: '/premium-access' });
    }
    else{
      this.props.history.push({ pathname: '/' });
    }
  }

 render(){
  const {classes} = this.props;
    return(
      <div className="signup">
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={(event) => this.handleSubmit(event)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={this.state.firstName}
                autoFocus
                onChange = {(event)=>{this.onInputChange(event,'firstName')}}
              />
              <p style={{color:'red'}}>{this.state.errors?.firstName ?this.state.errors.firstName:''}</p>
             </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={this.state.lastName}
                autoComplete="lname"
                onChange={(event) => { this.onInputChange(event, 'lastName') }}
              />
              <p style={{color:'red'}}>{this.state.errors?.lastName ?this.state.errors.lastName:''}</p>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={this.state.email}
                autoComplete="email"
                onChange={(event) => { this.onInputChange(event, 'email') }}
              />
              <p style={{color:'red'}}>{this.state.errors?.email ?this.state.errors.email:''}</p>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={this.state.password}
                autoComplete="current-password"
                onChange={(event) => { this.onInputChange(event, 'password') }}
              />
              <p style={{color:'red'}}>{this.state.errors?.password ?this.state.errors.password:''}</p>
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
        <div className="row">
                 <div className="col-sm-6 gstyle">
                   <Google onGoogleResponse={this.onSocialLogin}/>
                </div>
                 <div className="col-sm-6">
                 <Facebook onFacebook={this.onSocialLogin}/>
               </div>
        </div>
      </div>
      <Box mt={5}>
        {/* <Copyright /> */}
      </Box>
    </Container>
      </div>
    )
 }
}

export default withRouter(withStyles(useStyles)(SignUp));