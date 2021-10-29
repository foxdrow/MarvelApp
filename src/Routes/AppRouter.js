import  { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Fragment>
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    );
};
