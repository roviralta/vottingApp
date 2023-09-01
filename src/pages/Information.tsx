// src/components/EleccionesPage.js
import { IonContent, IonPage, IonList, IonItem } from "@ionic/react";
import Header from "../components/Header";

const EleccionesPage = () => {
    return (
        <IonPage>
            <Header></Header>
            <IonContent>
                <IonList>
                    <IonItem>
                        <p>
                            Fecha de las elecciones generales:{" "}
                            <b>10 de noviembre de 2023</b>
                        </p>
                    </IonItem>
                    <IonItem>
                        <p>
                            Normativas: Ley Orgánica del Régimen Electoral
                            General (LOREG)
                        </p>
                    </IonItem>
                    <IonItem>
                        <p>Proceso electoral:</p>
                        <ul>
                            <li>
                                Convocatoria de elecciones por el Gobierno: El
                                Presidente del Gobierno convoca las elecciones
                                generales, que deben celebrarse en un plazo de
                                54 días a partir de la disolución de las Cortes.
                            </li>
                            <li>
                                Campaña electoral con debates y propaganda:
                                Durante un período determinado, los partidos
                                políticos participan en debates públicos y
                                realizan campañas de propaganda para presentar
                                sus programas y candidatos.
                            </li>
                            <li>
                                Día de votación en los colegios electorales: Los
                                ciudadanos españoles mayores de 18 años tienen
                                derecho a votar en los colegios electorales
                                asignados. Se vota por representantes en el
                                Congreso de los Diputados y el Senado.
                            </li>
                            <li>
                                Recuento de votos y proclamación de resultados:
                                Después de cerrar las urnas, se realiza el
                                recuento de votos y se proclaman los resultados.
                                Los partidos obtienen escaños en función de los
                                votos recibidos.
                            </li>
                            <li>
                                Formación del nuevo gobierno: El partido o
                                coalición con mayoría en el Congreso de los
                                Diputados forma el nuevo gobierno. El líder de
                                ese partido se convierte en el Presidente del
                                Gobierno.
                            </li>
                        </ul>
                    </IonItem>
                    <IonItem>
                        <p>Requisitos para votar:</p>
                        <ul>
                            <li>Ser ciudadano español.</li>
                            <li>Tener una cuenta de metamask</li>
                            <li>Estar inscrito en el censo electoral.</li>
                        </ul>
                    </IonItem>
                    <IonItem>
                        <p>Asignación de escaños:</p>
                        <ul>
                            <li>
                                El Congreso de los Diputados tiene 350 escaños,
                                asignados por provincias.
                            </li>
                            <li>
                                El Senado tiene 266 escaños, con representación
                                territorial.
                            </li>
                            <li>
                                El sistema electoral se basa en representación
                                proporcional con corrección, lo que significa
                                que se tienen en cuenta los votos obtenidos por
                                cada partido para asignar escaños.
                            </li>
                        </ul>
                    </IonItem>
                    <IonItem>
                        <p>Papel de la Junta Electoral Central (JEC):</p>
                        <ul>
                            <li>
                                La JEC supervisa y garantiza la legalidad y
                                transparencia del proceso electoral.
                            </li>
                            <li>
                                Resuelve disputas y quejas relacionadas con el
                                proceso electoral.
                            </li>
                        </ul>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default EleccionesPage;
