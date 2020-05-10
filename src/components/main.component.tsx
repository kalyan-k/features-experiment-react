import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import HomePageComponent from './home-page.component';
import PageNotFoundComponent from './page-not-found.component';
import SampleFormComponent from './sample-form.component';
import { createGlobalState } from '../shared/context/global.context';
// import { ICompanyEmpDetails } from '../shared/interfaces/company-employee-details.interface';
// import TransactionService from '../shared/services/transaction-initialization.service';
import RegisterComponent from './register.component';
import { IRegisterModel } from '../shared/interfaces/register.interface';

function MainComponent() {
    //const initialCompEmpContext: ICompanyEmpDetails = TransactionService.initializeTrans();
    const initialRegisterValues: IRegisterModel = {
        salution: '',
        userName: '',
        email: '',
        gender: ''
    }
    //const GlobalStateProvider = createGlobalState(initialCompEmpContext);
    const GlobalStateProvider = createGlobalState(initialRegisterValues);
    return (
        <GlobalStateProvider>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <HomePageComponent />
                        </Route>
                        <Route path="/sampleForm">
                            <SampleFormComponent />
                        </Route>
                        <Route path="/register">
                            <RegisterComponent />
                        </Route>
                        <Route>
                            <PageNotFoundComponent />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </GlobalStateProvider>
    );
}

export default MainComponent;