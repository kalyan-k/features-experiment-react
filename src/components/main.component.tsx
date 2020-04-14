import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import HomePageComponent from './home-page.component';
import PageNotFoundComponent from './page-not-found.component';
import SampleFormComponent from './sample-form.component';

function MainComponent() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <HomePageComponent />
                    </Route>
                    <Route path="/sampleForm">
                        <SampleFormComponent />
                    </Route>
                    <Route>
                        <PageNotFoundComponent />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default MainComponent;