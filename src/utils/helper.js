import React from 'react';
import { Router, Route} from 'react-router-dom'
import { createMemoryHistory } from 'history'
// import { render, cleanup, fireEvent } from '@testing-library/react';

// Helper function
export function componentWithRouterMatch(
    Ui,
    {
      path = "/",
      route = "/",
      history = createMemoryHistory({ initialEntries: [route] })
    } = {}
  ) {
    return (
      
        <Router history={history}>
          <Route 
            path={path} 
            render={routeProps =>
              <Ui history={history} match={routeProps.match} />
            }
          />
        </Router>
      
    );
  }