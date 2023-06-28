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
    IonFooter,
    IonIcon,
} from "@ionic/react";
import "./variables.css";
import ConnectButton from "../components/ConnectButton";
import { logoInstagram, logoTwitter, logoFacebook } from "ionicons/icons";

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle slot="start">Voting dApp</IonTitle>
                    <ConnectButton></ConnectButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="voting-container">
                    <h1 className="header">2023 Elections!</h1>
                    <p>Vote for your preferred candidate. You decide!</p>
                </div>
                <div className="description-container">
                    <p className="description">
                        This app allows you to exercise your right to vote in
                        the general elections quickly and easily. There are no
                        more excuses for not participating in the future of your
                        country. Vote for your preferred candidates from the
                        comfort of your home, without queuing in long lines at
                        the polling stations. Remember that every vote counts
                        and can make a difference in the results. Don't worry
                        about the security of your data; our platform guarantees
                        the confidentiality and integrity of your vote, trust us
                        and exercise your power as a citizen!
                    </p>
                </div>
            </IonContent>
            <IonFooter>
                <div className="footer-div">
                    <IonButton fill="clear">
                        <IonIcon icon={logoInstagram}></IonIcon>
                    </IonButton>
                    <IonButton fill="clear">
                        {" "}
                        <IonIcon icon={logoTwitter}></IonIcon>
                    </IonButton>
                    <IonButton fill="clear">
                        {" "}
                        <IonIcon icon={logoFacebook}></IonIcon>
                    </IonButton>
                </div>
            </IonFooter>
        </IonPage>
    );
};

export default Home;
