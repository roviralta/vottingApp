// src/components/EleccionesPage.js
import React from "react";
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
} from "@ionic/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Results = () => {
    return (
        <IonPage>
            <Header></Header>
            <IonContent>
                <h1>This will show the results of the elections</h1>
            </IonContent>
            <Footer></Footer>
        </IonPage>
    );
};

export default Results;
