import { IonHeader, IonToolbar, IonMenuToggle } from "@ionic/react";
import ConnectButton from "./ConnectButton";

const Header = () => {
    return (
        <IonHeader>
            <IonToolbar id="toolbar">
                <IonMenuToggle slot="start">
                    <ConnectButton></ConnectButton>
                </IonMenuToggle>
                <h2 slot="end">Voting dApp</h2>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
