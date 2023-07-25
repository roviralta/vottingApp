import { IonHeader, IonToolbar } from "@ionic/react";
import ConnectButton from "./ConnectButton";

function Header() {
    return (
        <IonHeader>
            <IonToolbar id="toolbar">
                <ConnectButton></ConnectButton>
                <h2 style={{ paddingLeft: "41%" }}>Voting dApp</h2>
            </IonToolbar>
        </IonHeader>
    );
}

export default Header;
