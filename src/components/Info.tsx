import React from "react";
import {
    IonButton,
    IonModal,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import "../pages/variables.css";

interface Candidate {
    id: number;
    name: string;
    politic: string;
    imageUrl: string;
    description: string;
}

interface MyModalProps {
    isOpen: boolean;
    onClose: () => void;
    candidate: Candidate;
}

const Info: React.FC<MyModalProps> = ({ isOpen, onClose, candidate }) => {
    return (
        <IonModal id="example-modal" isOpen={isOpen} onDidDismiss={onClose}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Information</IonTitle>
                    <IonButton fill="clear" slot="end" onClick={onClose}>
                        Close
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2 style={{ marginLeft: "10px" }}>{candidate.name}</h2>
                <h4 style={{ marginLeft: "10px" }}>{candidate.politic}</h4>
                <p
                    style={{
                        textAlign: "justify",
                        marginLeft: "10px",
                        marginRight: "10px",
                    }}
                >
                    {candidate.description}
                </p>
            </IonContent>
            <IonButton fill="clear">Vote</IonButton>
        </IonModal>
    );
};

export default Info;
