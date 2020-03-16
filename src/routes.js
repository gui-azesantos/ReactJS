import React from "react";

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from "./pages/main"
import Local from "./pages/local"
import Evento from './pages/eventos'

const Routes = () =>(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/local/:id" component={Local}/>
        <Route path="/eventos/:id" component={Evento}/>
    </Switch>
    </BrowserRouter>
);

export default Routes;