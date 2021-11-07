import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import PrivateLayout from '../Layout/PrivateLayout';
import PublicLayout from '../Layout/PublicLayout';
import Productos from '../Pages/Admin/Productos';
import Usuarios from '../Pages/Admin/Ususarios';
import Ventas from '../Pages/Admin/Ventas';
import Features from '../Pages/Public/Features';
import Index from '../Pages/Public/Index';

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path={['/prod', '/user', '/ventas']}>
                        <PrivateLayout>
                            <Switch>
                                <Route path='/prod'>
                                    <Productos/>
                                </Route>
                                <Route path='/user'>
                                    <Usuarios/>
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
