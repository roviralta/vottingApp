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

            <IonModal

                isOpen={showPopup}
                onDidDismiss={closePopup}
            >
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            Political party "{candidate.description}"
                        </IonTitle>
                        <IonButton fill="clear" slot="end" onClick={closePopup}>
                            Close
                        </IonButton>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quas libero nam eaque ab commodi quis eveniet, a
                        veritatis. Ipsa, eos sed. A amet sint voluptatibus,
                        dolores ut tempora quos aliquam.
                    </p>
                </IonContent>
                <IonButton fill="clear">Vote</IonButton>
            </IonModal>
        </div>
    );
};

export default Info;
