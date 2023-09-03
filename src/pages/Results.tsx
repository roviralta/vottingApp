// src/components/EleccionesPage.js
import { IonContent, IonPage } from "@ionic/react";
import Header from "../components/Header";
import { getCandidates } from "../logic/funcs";
import { useEffect, useState } from "react";

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
            text: "Chart.js Bar Chart",
        },
    },
};

const Results = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const result = await getCandidates();
                setCandidates(result);
            } catch (error) {
                console.error("Error fetching candidates:", error);
            }
        };

        fetchCandidates();
    }, []);

    return (
        <IonPage>
            <Header></Header>
            <IonContent>
                <div>
                    <h1 style={{ textAlign: "center" }}>Resultados en vivo:</h1>
                    <br></br>
                    <br></br>
                    {candidates.map((candidate: any) => (
                        <li key={candidate.id} style={{ marginLeft: "50px" }}>
                            <strong>{candidate.politic}</strong> - Votos:
                            {candidate.voteCount}
                        </li>
                    ))}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Results;
