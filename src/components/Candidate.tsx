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

                                <h1>{candidate.name}</h1>
                                <h2>{candidate.description}</h2>
                            </IonCardContent>
                            <Info candidate={candidate}></Info>
                        </IonCard>
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    );
};

export default Candidate;
