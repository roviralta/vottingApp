import {
    IonButton,
    IonCol,
    IonGrid,
    IonHeader,
    IonIcon,
    IonRow,
    IonToolbar,
} from "@ionic/react";
import ConnectButton from "./ConnectButton";
import { useHistory } from "react-router";

import { settingsOutline } from "ionicons/icons";

function Header() {
    const history = useHistory();

    return (
        <IonHeader>
            <IonToolbar id="toolbar">
                <IonGrid>
                    <IonRow>
                        <IonCol
                            size="1"
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <ConnectButton />
                        </IonCol>
                        <IonCol
                            size="10"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <h3 style={{ color: "black" }}>Voting dApp</h3>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonToolbar>
        </IonHeader>
    );
}

export default Header;
