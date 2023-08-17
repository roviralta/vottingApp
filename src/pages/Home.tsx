import { IonContent, IonPage, IonFabButton, IonFab } from "@ionic/react";
import "./variables.css";
import { useHistory } from "react-router";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";

const Home: React.FC = () => {
    const history = useHistory();

    return (
        <>
            <Menu></Menu>
            <IonPage id="main-content">
                <Header></Header>
                <IonContent>
                    <div className="voting-container">
                        <h1 className="header">2023 Elections!</h1>
                        <p>Vote for your preferred candidate. You decide!</p>
                    </div>
                    <div className="description-container">
                        <p className="description">
                            This app allows you to exercise your right to vote
                            in the general elections quickly and easily. There
                            are no more excuses for not participating in the
                            future of your country. Vote for your preferred
                            candidates from the comfort of your home, without
                            queuing in long lines at the polling stations.
                            Remember that every vote counts and can make a
                            difference in the results. Don't worry about the
                            security of your data; our platform guarantees the
                            confidentiality and integrity of your vote, trust us
                            and exercise your power as a citizen!
                        </p>
                    </div>
                    <IonFab
                        vertical="bottom"
                        horizontal="end"
                        style={{
                            position: "fixed",
                            bottom: "8%",
                            right: "5%",
                        }}
                    >
                        <IonFabButton onClick={() => history.push("/voter")}>
                            VOTE!
                        </IonFabButton>
                    </IonFab>
                </IonContent>
                <Footer></Footer>
            </IonPage>
        </>
    );
};

export default Home;
