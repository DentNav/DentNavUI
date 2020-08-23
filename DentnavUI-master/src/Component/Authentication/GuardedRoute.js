import React from 'react';
import { Route, Redirect } from "react-router-dom";
import ls from 'local-storage';

const GuardedRoute = ({ component: Component, ...rest }) => {

   return <Route {...rest} render={(props) => (
     rest.protected ?
      ls.get('userAuthenticated')
        ? <Component {...props} />
        : <Redirect to='/login' /> 
        : <Route component={Component}/>
  )} />
  }

export default GuardedRoute;

// https://stackoverflow.com/questions/57453141/using-react-hooks-to-update-w-scroll
// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser