import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

import {Container} from 'reactstrap';
import MainContent from './containers/MainContent';
import DetailContent from './containers/DetailContent';

  const Routes = () => {
    return (
        <Container fluid>
            <Route 
                exact 
                path="/:query?" 
                render={routeProps =>
                   <MainContent history={routeProps.history} match={routeProps.match} />
                }
            />
            <Route 
                exact 
                path="/detail/:id?" 
                render={routeProps =>
                   <DetailContent history={routeProps.history} match={routeProps.match} />
                }
            />
        </Container>
    );
  }

  export default Routes