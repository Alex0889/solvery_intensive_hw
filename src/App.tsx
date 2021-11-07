import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {ROUTE_LIST, ROUTES} from "./prebuilt/navigation/routes";
import { Provider } from "react-redux";
import { store } from "./app/store";

export type AppProps = {};

export const App: React.FC<AppProps> = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {ROUTE_LIST.map(route =>
            <Route path={route.url}
                   exact={route.exact}
                   component={route.component}
                   key={route.url}
            />
          )}
          <Redirect to={ROUTES.mentors.url}/>
        </Switch>
      </Router>
    </Provider>
  );
};
