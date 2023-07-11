import React, { useState } from "react";
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
} from "ionicons/icons";
import "../pages/variables.css";

const Menu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {" "}
            <IonMenu contentId="main-content">
                <IonHeader>
                    {" "}
                    <IonToolbar id="toolbarMenu">
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            {" "}
                            <IonImg src={metamask} id="icon"></IonImg>
                            <h3>Menu</h3>
                        </div>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem>
                            <IonIcon
                                id="iconMenu"
                                icon={personCircleOutline}
                            ></IonIcon>
                            Perfil
                        </IonItem>
                        <IonItem>
                            {" "}
                            <IonIcon
                                id="iconMenu"
                                icon={barChartOutline}
                            ></IonIcon>
                            Results
                        </IonItem>
                        <IonItem>
                            {" "}
                            <IonIcon
                                id="iconMenu"
                                icon={informationCircleOutline}
                            ></IonIcon>
                            Information
                        </IonItem>
                        <IonItem>
                            {" "}
                            <IonIcon
                                id="iconMenu"
                                icon={settingsOutline}
                            ></IonIcon>
                            Settings
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
        </>
    );
};
export default Menu;
