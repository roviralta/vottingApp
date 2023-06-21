import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonButton,
} from "@ionic/react";
import "./Home.css";
import ConnectButton from "../components/ConnectButton";
import Candidate from "../components/Candidate";

const Voter = () => {
    const cands = [
        {
            id: 0,
            name: "Pedro",
            description: "PSOE",
            imageUrl: "AAAA",
        },
        {
            id: 1,
            name: "Abascal",
            description: "VOX",
            imageUrl: "AAAA",
        },
        {
            id: 2,
            name: "Coleta",
            description: "Podemos",
            imageUrl: "AAAA",
        },
    ];

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle slot="start">Voting dApp</IonTitle>
                    <ConnectButton></ConnectButton>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <Candidate candidates={cands}></Candidate>
            </IonContent>
        </IonPage>
    );
};

export default Voter;
