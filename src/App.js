import React from 'react';
import {AppProvider} from './context/AppContext';
import './app.scss';
import Header from './containers/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';
import {Container} from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch); 


function App() {
  return (
      <AppProvider>
        <Container fluid className="mt-4">
          <Router>
            <Header />
            <Routes />
          </Router>
        </Container>
      </AppProvider>
  );
}

export default App;
