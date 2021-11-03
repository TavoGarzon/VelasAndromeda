import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import PrivateLayout from '../Layout/PrivateLayout';
import PublicLayout from '../Layout/PublicLayout';
import Dashboard from '../Pages/Admin/Dashboard';  
import Roles from '../Pages/Admin/Roles';
import Ventas from '../Pages/Admin/Ventas';
import Features from '../Pages/Public/Features';
import Index from '../Pages/Public/Index';

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path={['/dash', '/roles', '/ventas']}>
                        <PrivateLayout>
                            <Switch>
                                <Route path='/dash'>
                                    <Dashboard/>
                                </Route>
                                <Route path='/roles'>
                                    <Roles/>
                                </Route>
                                <Route path='/ventas'>
                                    <Ventas />
                                </Route>
                            </Switch>
                        </PrivateLayout>
                    </Route>
                    <Route path={['/Features','/']}>
                        <PublicLayout>
                            <Switch>
                                <Route path='/Features'>
                                    <Features />
                                </Route>
                                <Route path='/'>
                                    <Index />
                                </Route>
                            </Switch>
                        </PublicLayout>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
