import { IonApp, IonRouterOutlet, IonSplitPane, IonPage } from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./menu";

import Home from "./pages/home";
import React from "react";
import List from "./pages/list";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Admin from "./pages/admin";


const AppShell: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonPage id="main">
            <IonRouterOutlet>
              {/* <Route exact path="/" component={Home} /> */}
              <Route path="/" render={() => <Redirect to="/home" />} exact />
              <Route path="/home" component={Home} exact />
              <Route path="/list" component={List} exact />
              <Route path="/contact" component={Contact} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/admin" component={Admin} exact />
            </IonRouterOutlet>
          </IonPage>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
