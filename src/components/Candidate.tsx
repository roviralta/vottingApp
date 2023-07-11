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

function Candidate(props: { candidates: any[] }) {
    return (
        <IonGrid>
            <IonRow>
                {props.candidates.map((candidate) => (
                    <IonCol key={candidate.id} size="6" size-sm="4" size-md="3">
                        <IonCard style={{ borderRadius: "5%" }}>
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
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                {" "}
                                <Info candidate={candidate}></Info>
                                <IonButton fill="clear" slot="end">
                                    Vote
                                </IonButton>
                            </div>
                        </IonCard>
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    );
}

export default Candidate;
