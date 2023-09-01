// src/components/EleccionesPage.js
import { IonContent, IonPage } from "@ionic/react";
import Header from "../components/Header";

const Results = () => {
    return (
        <IonPage>
            <Header></Header>
            <IonContent>
                <h1>This will show the results of the elections</h1>
            </IonContent>
        </IonPage>
    );
};

export default Results;
