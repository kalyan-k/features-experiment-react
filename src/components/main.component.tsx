import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import HomePageComponent from './home-page.component';
import PageNotFoundComponent from './page-not-found.component';
import SampleFormComponent from './sample-form.component';
import { createGlobalState } from '../shared/context/global.context';
import { ICompanyEmpDetails } from '../shared/interfaces/company-employee-details.interface';

function MainComponent() {
    const initialCompEmpContext: ICompanyEmpDetails = {
        companyName: "",
        employeeDetails: {
            firstName: "",
            lastName: "",
            age: undefined,
            gender: "",
            address: {
                street: "1950 hassel rd",
                city: "hoffman estate",
                zipcode: "2342",
                county: "asfd",
                country: "usa"
            }
        },
        projectDetails: {
            projectName: "",
            totalExp: undefined,
            tenure: undefined,
            location: "",
            address: {
                street: "aweaklj",
                city: "awef",
                zipcode: "234234",
                county: "nkh",
                country: ";lkjl"
            },
            verified: false
        }
    }
    const GlobalStateProvider = createGlobalState(initialCompEmpContext);
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