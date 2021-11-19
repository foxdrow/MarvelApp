import  { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Characters from "../pages/Characters";
import Character from "../pages/Character";
import Home from "../pages/Home"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Fragment>
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/characters" component={Characters} exact={true} />
                    <Route path="/characters/:id" component={Character} exact={true} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    );
};
