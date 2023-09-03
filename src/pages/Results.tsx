// src/components/EleccionesPage.js
import {
    IonButton,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
} from "@ionic/react";
import Header from "../components/Header";
import { getCandidates } from "../logic/funcs";
import { useEffect, useState } from "react";
import { refreshOutline } from "ionicons/icons";

interface Candidate {
    id: number;
    name: string;
    politic: string;
    voteCount: number;
}

const Results = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [winner, setWinner] = useState("");
    const [maxVotes, setMaxVotes] = useState(0);

    const fetchCandidates = async () => {
        try {
            const result = await getCandidates();
            setCandidates(result);
        } catch (error) {
            console.error("Error fetching candidates:", error);
        }
    };

    useEffect(() => {
        fetchCandidates();
    }, []);

    function getWinner() {
        candidates.map((cand) => {
            if (cand.voteCount > maxVotes) {
                setWinner(cand.name);
                setMaxVotes(cand.voteCount);
            }
        });
    }

    return (
        <IonPage>
            <Header></Header>
            <IonContent>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <h1 style={{ textAlign: "center" }}>Resultados en vivo</h1>

                    <h3 style={{ textAlign: "center" }}>
                        Ganador teorico: {winner}
                    </h3>
                    <IonButton
                        fill="clear"
                        style={{ justifyItems: "center" }}
                        onClick={fetchCandidates}
                    >
                        <IonIcon icon={refreshOutline}></IonIcon>Refresh
                    </IonButton>
                    <br></br>
                    <br></br>
                    <IonList>
                        {candidates.map((candidate) => (
                            <IonItem>
                                <IonLabel>
                                    <h2>
                                        {candidate.name} ({candidate.politic})
                                    </h2>
                                    <p>Votos: {candidate.voteCount}</p>
                                </IonLabel>
                            </IonItem>
                        ))}
                    </IonList>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Results;
