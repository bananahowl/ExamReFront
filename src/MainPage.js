import React from 'react';
import {BrowserRouter as Router,
Switch,Route,Link
} from "react-router-dom";


export default function MainPage() {
    return(
        <Router>
            <div>
            <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about book kayak</Link>
          </li>
          <li>
            <Link to="/Booking">Booking a kayay</Link>
          </li>
        </ul>

        <hr />   
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Booking">
            <Booking />
          </Route>
        </Switch>

            </div>
        </Router>
    );
    function Home() {
        return (
          <div>
            <h2>Home</h2>
            <p> main page </p>
            <hr/>
          </div>
        );
      }
      
      function About() {
        return (
          <div>
            <h2>About booking kayat</h2>
            <p> About kayak book</p>
          </div>
        );
      }
      
      function Booking() {
        return (
          <div>
            <h2>Booking page</h2>
            <p> booking page here</p>
          </div>
        );
      }
    
}