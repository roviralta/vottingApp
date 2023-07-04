import {
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonList,
    IonMenu,
    IonMenuToggle,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import metamask from "../assets/MetaMask_Fox.svg.png";
interface PropAccount {
    wallet: string;
}

const Account: React.FC<PropAccount> = ({ wallet }) => {
    return (
        <div style={{ display: "flex" }}>
            <img id="icon" src={metamask} style={{ paddingTop: "10%" }}></img>
            <p slot="start" style={{ color: "black", paddingLeft: "5%" }}>
                Account: {wallet.slice(0, 5)}
            </p>
        </div>
    );
};

export default Account;
