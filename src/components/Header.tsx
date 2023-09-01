import { IonButton, IonHeader, IonToolbar } from "@ionic/react";
import ConnectButton from "./ConnectButton";
import { useHistory } from "react-router";

function Header() {
    const history = useHistory();

    return (
        <IonHeader>
            <IonToolbar id="toolbar">
                <ConnectButton></ConnectButton>
                <IonButton
                    fill="clear"
                    style={{ paddingLeft: "41%", color: 'black' }}
                    onClick={() => history.push("/home")}
                >
                    Voting dApp
                </IonButton>
            </IonToolbar>
        </IonHeader>
    );
}

export default Header;
