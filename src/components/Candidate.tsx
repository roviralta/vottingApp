import {
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonButton,
} from "@ionic/react";
import "../pages/variables.css";

interface Candidate {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
}

interface PropCandidate {
    candidates: Candidate[];
}

const Candidate: React.FC<PropCandidate> = ({ candidates }) => {
    return (
        <IonGrid>
            <IonRow>
                {candidates.map((candidate) => (
                    <IonCol key={candidate.id} size="6" size-sm="4" size-md="3">
                        <IonCard>
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

                                <h3>{candidate.name}</h3>
                                <p>{candidate.description}</p>
                            </IonCardContent>
                            <IonButton fill="clear">Vote</IonButton>
                        </IonCard>
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    );
};

export default Candidate;
