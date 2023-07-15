import React, { useState } from "react";
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
    description: string;
    imageUrl: string;
}

interface MyModalProps {
    isOpen: boolean;
    onClose: () => void;
    candidate: Candidate;
}

const Info: React.FC<MyModalProps> = ({ isOpen, onClose, candidate }) => {
    return (
        <IonModal isOpen={isOpen} onDidDismiss={onClose}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Political party "{candidate.description}"
                    </IonTitle>
                    <IonButton fill="clear" slot="end" onClick={onClose}>
                        Close
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quas libero nam eaque ab commodi quis eveniet, a veritatis.
                    Ipsa, eos sed. A amet sint voluptatibus, dolores ut tempora
                    quos aliquam.
                </p>
            </IonContent>
            <IonButton fill="clear">Vote</IonButton>
        </IonModal>
    );
};

export default Info;
