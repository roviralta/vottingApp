import {
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonButton,
} from "@ionic/react";
import "../pages/variables.css";
import Info from "../components/Info";
import { useState, useEffect } from "react";

interface Candidate {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
}

function Candidate(props: { candidate: Candidate }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <IonCard id="candidateCard" button onClick={openModal}>
                <IonCardContent>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            id="candidateImage"
                            src={props.candidate.imageUrl}
                            alt={props.candidate.name}
                        />
                    </div>

                    <h2 className="candidate-name">
                        <b> {props.candidate.name}</b>
                    </h2>
                    <h3>{props.candidate.description}</h3>
                </IonCardContent>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                ></div>
            </IonCard>
            <Info
                isOpen={isModalOpen}
                onClose={closeModal}
                candidate={props.candidate}
            />
        </>
    );
}

export default Candidate;
