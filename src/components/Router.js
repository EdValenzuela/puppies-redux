import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Adoptado from '../screens/AdoptadoScreen';
import Home from '../screens/HomeScreen';
import Login from '../screens/LoginScreen';

export const AppRouter = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/felicidades">
            <Adoptado />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
    </Switch>
)

export default AppRouter;