import { IonButton, IonHeader, IonToolbar } from "@ionic/react";
import ConnectButton from "./ConnectButton";
import { useHistory } from "react-router";

function Header() {
    const history = useHistory();

    return (
        <IonHeader>
            <IonToolbar id="toolbar">
                <div style={{ display: "flex", flexDirection: "row" }}>
                    {" "}
                    <ConnectButton></ConnectButton>
                    <IonButton
                        fill="clear"
                        onClick={() => history.push("/home")}
                        style={{ paddingLeft: "37%" }}
                    >
                        Voting dApp
                    </IonButton>
                </div>
            </IonToolbar>
        </IonHeader>
    );
}

export default Header;
