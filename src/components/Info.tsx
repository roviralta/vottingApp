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

function Info(props: any) {
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
                            Political party "{props.candidate.description}"
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
}

export default Info;
