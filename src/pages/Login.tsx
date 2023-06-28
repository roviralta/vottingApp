import {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
} from "@ionic/react";
import "./variables.css";
import ConnectButton from "../components/ConnectButton";

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle slot="start">Voting dApp</IonTitle>
                    <ConnectButton></ConnectButton>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className="center-div">
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>Information</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            Please, in order to connect install Metamask and try
                            it again.
                        </IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
