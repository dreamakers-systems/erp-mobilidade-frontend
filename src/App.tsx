import { Refine, AuthProvider } from "@pankod/refine-core";
import { DataProvider } from "@pankod/refine-strapi-v4";
import routerProvider from "@pankod/refine-react-router-v6";
import { Layout, ReadyPage, notificationProvider, ErrorComponent } from "@pankod/refine-antd";


import "@pankod/refine-antd/dist/styles.min.css";

import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import "@pankod/refine/dist/styles.min.css";

import { MotoristCreate } from "./components/pages/motorists";
import { Login } from "./components/pages/login";
import { MotoristList } from "./components/pages/motorists/list";

const API_URL = "http://192.168.0.105:5000/";

const App: React.FC = () => {
    const {
        isLoading,
        loginWithRedirect,
        isAuthenticated,
        user,
        logout,
        getIdTokenClaims,
    } = useAuth0();

    if (isLoading) {
        return <span>loading...</span>;
    }

    const authProvider: AuthProvider = {
        login: () => {
            loginWithRedirect();
            return Promise.resolve();
        },
        logout: () => {
            logout({ returnTo: window.location.origin });
            return Promise.resolve("/");
        },
        checkError: () => Promise.resolve(),
        checkAuth: () => {
            if (isAuthenticated) {
                return Promise.resolve();
            }

            return Promise.reject();
        },
        getPermissions: () => Promise.resolve(),
        getUserIdentity: async () => {
            if (user) {
                return Promise.resolve({
                    ...user,
                    avatar: user.picture,
                });
            }
        },
    };

    getIdTokenClaims().then((token) => {
        if (token) {
            axios.defaults.headers.common = {
                Authorization: `Bearer ${token.__raw}`,
            };
        }
    });

    return (
        <Refine
            LoginPage={Login}
            authProvider={authProvider}
            dataProvider={DataProvider(API_URL, axios)}
            routerProvider={routerProvider}
            notificationProvider={notificationProvider}
            Layout={Layout}
            resources={[
                {
                    name: "motorists",
                    list: MotoristList,
                    options:{label: "Motoristas", route: "motorists", }

                    
                }
            ]}
        />
    );
};

export default App;