import { IonContent, IonPage, IonFabButton, IonFab } from "@ionic/react";
import "./variables.css";
import { useHistory } from "react-router";
import Header from "../components/Header";

const Home = () => {
    const history = useHistory();

    return (
        <>
            <IonPage id="main-content">
                <Header></Header>
                <IonContent>
                    <div className="voting-container">
                        <h1 className="header">Elecciones 2023</h1>
                        <p>Vota por su candidato favorito. Usted decide!</p>
                    </div>
                    <div className="description-container">
                        <p className="description">
                            Esta aplicación le permite ejercer su derecho de
                            voto en las elecciones generales de forma rápida y
                            sencilla. En ya no hay excusas para no participar en
                            el futuro de tu país. Vota a tus candidatos
                            candidatos preferidos desde la comodidad de tu casa,
                            sin largas colas en los colegios electorales.
                            Recuerda que cada voto cuenta y puede en los
                            resultados. No te preocupes por la seguridad de tus
                            datos; nuestra plataforma garantiza la
                            confidencialidad e integridad de tu voto, confía en
                            nosotros ¡y ejerce tu poder como ciudadano!
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
                        <IonFabButton
                            onClick={() => history.push("/candidates")}
                        >
                            VOTE!
                        </IonFabButton>
                    </IonFab>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Home;
