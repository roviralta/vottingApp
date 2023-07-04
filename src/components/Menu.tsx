import React from "react";
import {
    IonButton,
    IonContent,
    IonHeader,
    IonImg,
    IonItem,
    IonList,
    IonMenu,
    IonMenuToggle,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import metamask from "../assets/MetaMask_Fox.svg.png";

const Menu: React.FC = () => {
    return (
        <>
            {" "}
            <IonMenu contentId="main-content">
                <IonHeader>
                    {" "}
                    <IonToolbar id="toolbarMenu">
                        <IonImg src={metamask} id="icon"></IonImg>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem>Perfil</IonItem>
                        <IonItem>Results</IonItem>
                        <IonItem>Information</IonItem>
                        <IonItem>Settings</IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
        </>
    );
};
export default Menu;
