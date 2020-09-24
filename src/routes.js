import React from 'react';
import {
    Switch,
    Route,
    
  } from "react-router-dom";
import MainContent from './containers/MainContent';
import DetailContent from './containers/DetailContent';
import Header from './components/Header';
import Home from './containers/Home';

  const Routes = () => {
    return (
        
        <Switch>
          <Route 
              exact 
              path="/" 
              render={routeProps =>
                <Home history={routeProps.history} match={routeProps.match} />
              }
          />
          <Route 
              exact 
              path="/:query" 
              render={routeProps =>
                <>
                  <Header history={routeProps.history} match={routeProps.match}/>
                  <MainContent match={routeProps.match} />
                </>
              }
          />
          <Route 
              exact 
              path="/image/:id?" 
              render={routeProps =>
                <>
                  <Header history={routeProps.history} match={routeProps.match}/>
                  <DetailContent history={routeProps.history} match={routeProps.match} />
                </>
              }
          />
        </Switch>
    
    );
  }

  export default Routes