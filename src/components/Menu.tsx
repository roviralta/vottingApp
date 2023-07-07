import React, { useState } from "react";
import {
    IonContent,
    IonHeader,
    IonImg,
    IonItem,
    IonList,
    IonMenu,
    IonToolbar,
} from "@ionic/react";
import metamask from "../assets/MetaMask_Fox.svg.png";

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
