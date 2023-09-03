import { IonCol, IonGrid, IonHeader, IonRow, IonToolbar } from "@ionic/react";
import ConnectButton from "./ConnectButton";

function Header() {
    return (
        <IonHeader>
            <IonToolbar id="toolbar">
                <IonGrid>
                    <IonRow>
                        <IonCol
                            size="2"
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <ConnectButton />
                        </IonCol>
                        <IonCol
                            size="9"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "1px",
                            }}
                        >
                            <h3>Voting dApp</h3>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonToolbar>
        </IonHeader>
    );
}

export default Header;
