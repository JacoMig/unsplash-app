import React from 'react';

import './app.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';
import registerFaIcons from './utils/registerFaIcons';
/* import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faUser, faTags, faThumbsUp, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch, faUser, faTags, faThumbsUp, faCalendarAlt);  */
registerFaIcons();

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
