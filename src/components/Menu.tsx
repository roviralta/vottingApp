import {
    IonContent,
    IonHeader,
    IonIcon,
    IonImg,
    IonItem,
    IonList,
    IonMenu,
    IonToolbar,
} from "@ionic/react";
import metamask from "../assets/MetaMask_Fox.svg.png";
import {
    personCircleOutline,
    settingsOutline,
    informationCircleOutline,
    barChartOutline,
    ribbonOutline,
} from "ionicons/icons";
import "../pages/variables.css";
import { useHistory } from "react-router";

function Menu() {
    const history = useHistory();

    return (
        <>
            {" "}
            <IonMenu contentId="main-content">
                <IonHeader>
                    {" "}
                    <IonToolbar>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                height: "65px",
                            }}
                        >
                            {" "}
                            <IonImg src={metamask} id="icon"></IonImg>
                            <h3>Menu</h3>
                        </div>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem
                            button
                            onClick={() => history.push("/profile")}
                        >
                            <IonIcon
                                id="iconMenu"
                                icon={personCircleOutline}
                            ></IonIcon>
                            Perfil
                        </IonItem>
                        <IonItem
                            button
                            onClick={() => history.push("/candidates")}
                        >
                            <IonIcon
                                id="iconMenu"
                                icon={ribbonOutline}
                            ></IonIcon>
                            Candidates
                        </IonItem>
                        <IonItem
                            button
                            onClick={() => history.push("/results")}
                        >
                            {" "}
                            <IonIcon
                                id="iconMenu"
                                icon={barChartOutline}
                            ></IonIcon>
                            Results
                        </IonItem>
                        <IonItem
                            button
                            onClick={() => history.push("/information")}
                        >
                            {" "}
                            <IonIcon
                                id="iconMenu"
                                icon={informationCircleOutline}
                            ></IonIcon>
                            Information
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
        </>
    );
}
export default Menu;
