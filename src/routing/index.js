import React from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import FarmaciaDeTurno from '../views/FarmaciaDeTurno';

function Routing() {

    return (
        <Router>
            <Switch>
                <Route exact path="/farmacias-turno" component={FarmaciaDeTurno} /> 
                <Route render={() => <Redirect to="/farmacias-turno" />} />
            </Switch>
        </Router>
    );
}

export default Routing;
