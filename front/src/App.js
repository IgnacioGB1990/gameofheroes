import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/Home.page";
import { LoginPage } from "./pages/Login.page";
import { SignUpPage } from "./pages/SignUp.page";
import { PrivatePage } from "./pages/Private.page";
import { Basket } from "./components/Heroes/BasketHeroes";
import { List } from "./components/Heroes";
import { withAuthentication } from "../lib/withAuthentication";
import 'bootstrap/dist/css/bootstrap.min.css'

export const App = withAuthentication(() => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/auth/signup" component={SignUpPage} />
        {/* <Route path="/list" component={ListHeroesPage} /> */}
        <Route path="/list" component={List} />
        <Route path="/private" component={PrivatePage} />
        <Route path="/portfolio" component={Basket} />
      </Switch>
    </Layout>
  </Router>
));
