import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';

/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/
function Router() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    );
  }



// Write component imports here //



// Start Router function here //


export default Router