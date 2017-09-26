import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './pages/LandingPage';
import SignUp from './pages/SignUp';
import ProfilePage from './pages/Profile';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="/home" component={ Home } />
        <Route path="/signup" component={ SignUp } />
        <Route path="/profile" component={ ProfilePage } />
    </Route>
)