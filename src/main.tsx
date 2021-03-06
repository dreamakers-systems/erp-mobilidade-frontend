
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const providerConfig = {
    domain: "",
    clientId: "",
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