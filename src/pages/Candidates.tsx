import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import "./variables.css";
import Candidate from "../components/Candidate";
import { cands } from "../assets/data";
import Header from "../components/Header";


import { useState } from "react";

const Voter = () => {
    const [candidates, setCandidates] = useState([]);

    return (
        <>
            <IonPage id="main-content">
                <Header></Header>
                <IonContent fullscreen>
                    <IonGrid>
                        <IonRow>
                            {cands.map((candidate: any) => (
                                <IonCol
                                    key={candidate.id}
                                    size="6"
                                    size-sm="4"
                                    size-md="3"
                                >
                                    <Candidate
                                        candidate={candidate}
                                    ></Candidate>
                                </IonCol>
                            ))}
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Voter;
