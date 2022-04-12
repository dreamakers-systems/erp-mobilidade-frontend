
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const providerConfig = {
    domain: "krypta.us.auth0.com",
    clientId: "iWSNUTO5Vg1H6JIFzSf6OQ6EnncwKpAF",
    redirectUri: window.location.origin,
  };

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider {...providerConfig}>
            <App />
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);