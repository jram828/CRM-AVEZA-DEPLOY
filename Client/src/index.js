import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Auth0Provider } from "@auth0/auth0-react";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  // <GoogleOAuthProvider clientId="844309234209-e072sos6qgabufkk0tmgv74900fknd62.apps.googleusercontent.com">
  <Auth0Provider
    domain="https://crm-aveza-prueba.vercel.app"
    clientId="4wGkjRgEWRfdFNtdeAg48PWXFIsIuq2j"
    authorizationParams={{
      redirect_uri: "https://crm-aveza-prueba.vercel.app/home",
    }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
  // </GoogleOAuthProvider>
);


