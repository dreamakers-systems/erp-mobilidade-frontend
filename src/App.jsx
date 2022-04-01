import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'


import { getConfig } from './configs';
import Home from './components/pages/Home'
import { Auth0Provider } from '@auth0/auth0-react';

import { createBrowserHistory } from 'history';
import { ProtectedRoute } from './components/protected-route';

const config = getConfig();

export const history = createBrowserHistory();

const onRedirectCallback = (appState) => {
  // Use the router's history module to replace the url
  history.replace(appState?.returnTo || window.location.origin);
};

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  redirectUri: window.location.origin,
  
};

function App() {
  return (
    <Auth0Provider {...providerConfig} onRedirectCallback={onRedirectCallback}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<ProtectedRoute component={Home}/>}/>
        </Routes>
      </Router>
    </Auth0Provider>
  )
}

export default App
