import React, { useState } from "react";
import {
    IonButton,
    IonModal,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
} from "@ionic/react";

interface Candidate {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
}
interface PropInfo {
    candidate: Candidate;
}

const Info: React.FC<PropInfo> = ({ candidate }) => {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <IonButton fill="clear" onClick={openPopup}>
                Info
            </IonButton>

            <IonModal isOpen={showPopup} onDidDismiss={closePopup}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            Political party "{candidate.description}"
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <p>This will show tha strong keys about it</p>
                </IonContent>
            </IonModal>
        </div>
    );
};

export default Info;
