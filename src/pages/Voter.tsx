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
import "./Home.css";
import ConnectButton from "../components/ConnectButton";

const Voter: React.FC = () => {
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
                            <IonCardTitle>Perfect</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            Good job, you are connected
                        </IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Voter;
