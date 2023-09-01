import { Redirect, Route } from "react-router-dom";
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Candidates from "./pages/Candidates";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Results from "./pages/Results";
import Information from "./pages/Information";

import {
    personCircleOutline,
    informationCircleOutline,
    barChartOutline,
    ribbonOutline,
    homeOutline,
} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import { triangle, ellipse, square } from "ionicons/icons";

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
            <IonTabs>
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
                <IonTabBar slot="bottom">
                    <IonTabButton tab="tab1" href="/home">
                        <IonIcon aria-hidden="true" icon={homeOutline} />
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab2" href="/candidates">
                        <IonIcon aria-hidden="true" icon={ribbonOutline} />
                        <IonLabel>Candidates</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab3" href="/results">
                        <IonIcon aria-hidden="true" icon={barChartOutline} />
                        <IonLabel>Results</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab4" href="/information">
                        <IonIcon
                            aria-hidden="true"
                            icon={informationCircleOutline}
                        />
                        <IonLabel>Information</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
