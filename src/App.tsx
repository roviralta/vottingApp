import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Candidates from "./pages/Candidates";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Results from "./pages/Results";
import Information from "./pages/Information";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import Menu from "./components/Menu";

/* Optional CSS utils that can be commented out */
/* import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css"; */

/* Theme variables */

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <Menu />
            <IonRouterOutlet>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/candidates">
                    <Candidates />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/results">
                    <Results />
                </Route>
                <Route exact path="/information">
                    <Information />
                </Route>
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
);

export default App;
