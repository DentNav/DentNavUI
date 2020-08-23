import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Google from './Google';
import Facebook from './Facebook';
import '../Forms/login/login.css';
import ls from 'local-storage';
import { withRouter } from 'react-router';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

class Login extends React.Component{

    constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
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

    // if (typeof fields["password"] !== "undefined") {
    //   if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
    //     formIsValid = false;
    //     errors["password"] = "*Please enter secure and strong password.";
    //   }
    // }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  onSocialLogin = (response,type) => {
    if(type === "google"){
      this.setState({
        email: response.profileObj.email
      })
    }
    else{
      this.setState({
        email: response.email
      })
    }
    console.log('in parent',this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.setState({
    //   errors: null
    // })
    // const err = this.validateInput();
    // if (err) {
    //   console.log("submit is clicked", this.state);
    // }
    // else {
    //   console.log("error", this.state);
    // }
    ls.set('userAuthenticated',1);
    this.props.history.push({ pathname: '/' });
  }

 render(){
  const {classes} = this.props;
    return(
      <div className="loginForm"><Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpenOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={(event) => this.handleSubmit(event)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
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
            Login
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
                 { <div className="col-sm-6">
                 <Facebook onFacebook={this.onSocialLogin}/>
                </div> }
        </div>
      </div>
      <Box mt={5}>
        {/* <Copyright /> */}
      </Box>
    </Container></div>
    )
 }
}

export default withRouter(withStyles(useStyles)(Login));