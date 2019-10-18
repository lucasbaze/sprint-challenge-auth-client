import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { withRouter, Switch, Route, Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { axiosWithAuth } from '../utils';

import { Signup } from './Signup';
import { Jokes } from './Jokes';
import { Login } from './Login';

function App({ history }) {
    return (
        <Container>
            <div className="App">
                <h1>Get yourself some Dad Jokes!</h1>
                <div>
                    <Link to="/">Register </Link>
                    <Link to="/login">Login </Link>
                    <Link to="/jokes">Jokes </Link>
                    <Link
                        onClick={() => {
                            axiosWithAuth().get('/auth/logout');
                            history.push('/login');
                        }}
                    >
                        Logout
                    </Link>
                </div>
            </div>
            <Switch>
                <Route exact path="/" component={Signup} />
                <Route exact path="/jokes" component={Jokes} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </Container>
    );
}

export default withRouter(App);
