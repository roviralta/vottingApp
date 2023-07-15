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
import { useState } from "react";

function Candidate(props: { candidates: any[] }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <IonGrid>
            <IonRow>
                {props.candidates.map((candidate) => (
                    <IonCol key={candidate.id} size="6" size-sm="4" size-md="3">
                        <IonCard id="candidateCard" button onClick={openModal}>
                            <Info
                                candidate={candidate}
                                isOpen={isModalOpen}
                                onClose={closeModal}
                            ></Info>
                            <IonCardContent>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <img
                                        id="candidateImage"
                                        src={candidate.imageUrl}
                                        alt={candidate.name}
                                    />
                                </div>

                                <h2>
                                    <b> {candidate.name}</b>
                                </h2>
                                <h3>{candidate.description}</h3>
                            </IonCardContent>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                {" "}
                                {/* <Info candidate={candidate}></Info>
                                <IonButton fill="clear" slot="end">
                                    Vote
                                </IonButton> */}
                            </div>
                        </IonCard>
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    );
}

export default Candidate;
