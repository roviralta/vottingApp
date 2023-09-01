import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import "./variables.css";
import Candidate from "../components/Candidate";
import pedro from "../assets/PedroSanchez.jpg";
import abascal from "../assets/abascal.jpg";
import aitor from "../assets/aitorEsteban.jpg";
import alberto from "../assets/albertoNuñez.jpg";
import cristina from "../assets/cristinaValido.jpg";
import diego from "../assets/diegoLoras.jpg";
import jose from "../assets/joseAngel.jpg";
import mertxe from "../assets/mertxe.jpg";
import miriam from "../assets/miriamNogueras.jpg";
import nestor from "../assets/nestorRego.jpeg";
import roger from "../assets/rogerMontañola.jpg";
import rufian from "../assets/rufian.jpeg";
import yolanda from "../assets/yolandaDiaz.jpeg";
import luis from "../assets/luisCampos.jpg";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { useState } from "react";

const Voter = () => {
    const cands = [
        {
            id: 0,
            name: "Pedro Sanchez",
            politic: "PSOE",
            imageUrl: pedro,
            description:
                " El PSOE es un partido con una larga trayectoria en la política española. Se destaca por su compromiso con políticas progresistas y su enfoque en cuestiones sociales, como la igualdad de género y los derechos laborales. Ha liderado el país en momentos cruciales y ha impulsado reformas significativas para el beneficio de la sociedad.",
        },
        {
            id: 1,
            name: "Santiago Abascal",
            politic: "VOX",
            imageUrl: abascal,
            description:
                "VOX es un partido que representa una voz firme en temas como la inmigración, la unidad de España y la seguridad. Promueve políticas de mano dura y busca defender los valores tradicionales. Ha ganado apoyo en los últimos años al atraer a aquellos que buscan un enfoque más conservador en la política.",
        },
        {
            id: 2,
            name: "Alberto Núñez",
            politic: "PP",
            imageUrl: alberto,
            description:
                " El Partido Popular es un partido de centro-derecha con una sólida historia de gestión económica y una postura a favor de la unidad de España. Ha demostrado ser un pilar de estabilidad en tiempos de incertidumbre política.",
        },
        {
            id: 3,
            name: "Yolanda Diaz",
            politic: "Sumar",
            imageUrl: yolanda,
            description:
                " Sumar es una coalición de partidos políticos valencianos que se unen bajo el lema de Sumem o Unimos. Destacan por su compromiso con los valores progresistas, la justicia social y la defensa de la cultura y la lengua valenciana. ",
        },
        {
            id: 4,
            name: "Gabriel Rufián",
            politic: "ERC",
            imageUrl: rufian,
            description:
                "ERC es un partido catalán que defiende la independencia de Cataluña. Representa una voz fuerte en la política catalana y trabaja incansablemente para lograr la autodeterminación de Cataluña.",
        },
        {
            id: 5,
            name: "Miriam Nogueras",
            politic: "Junts",
            imageUrl: miriam,
            description:
                "JUNTS es otro partido independentista catalán que busca la unidad en la lucha por la independencia. Ha liderado esfuerzos para avanzar hacia la soberanía de Cataluña.",
        },
        {
            id: 6,
            name: "Roger Montañola",
            politic: "PDeCat",
            imageUrl: roger,
            description:
                "El PDeCAT es un partido político catalán que se identifica con el catalanismo político. Su enfoque se centra en la promoción de los intereses de Cataluña y la defensa del derecho a la autodeterminación. ",
        },
        {
            id: 7,
            name: "Aitor Esteban",
            politic: "PNV",
            imageUrl: aitor,
            description:
                " El PNV es un partido vasco que prioriza los intereses del País Vasco y la preservación de su cultura. Ha desempeñado un papel importante en la política vasca y nacional.",
        },
        {
            id: 8,
            name: "Mertxe Aizpurua",
            politic: "EH Bildu",
            imageUrl: mertxe,
            description:
                "EH Bildu es un partido de izquierda independentista vasco que trabaja en favor de los derechos civiles y sociales en el País Vasco.",
        },
        {
            id: 9,
            name: "Néstor Rego",
            politic: "BNG",
            imageUrl: nestor,
            description:
                "El BNG es un partido nacionalista gallego que lucha por el bienestar de Galicia y la promoción de su cultura única.",
        },
        {
            id: 10,
            name: "Critstina Valido",
            politic: "Coalición Canaria",
            imageUrl: cristina,
            description:
                "Coalición Canaria es una alianza que trabaja para los intereses de las Islas Canarias, enfocándose en asuntos como el turismo y el desarrollo regional.",
        },
        {
            id: 11,
            name: "Luis Campos",
            politic: "Nueva Canarias",
            imageUrl: luis,
            description:
                "Nuevas Canarias es un partido regional centrado en mejorar la calidad de vida en Canarias y promover sus intereses en el Congreso de los Diputados.",
        },
        {
            id: 12,
            name: "Diego Loras",
            politic: "Coalición Existe",
            imageUrl: diego,
            description:
                "Coalición Existé se presenta como una alternativa fresca en Castilla y León, enfocándose en el desarrollo regional y la mejora de la calidad de vida.",
        },
        {
            id: 13,
            name: "José Ángel Ceña",
            politic: "Soria YA!",
            imageUrl: jose,
            description:
                "Soria Ya es un movimiento político que lucha por una mayor inversión y desarrollo en la provincia de Soria, impulsando la prosperidad de esta hermosa región de Castilla y León.",
        },
    ];

    const [candidates, setCandidates] = useState([]);

    return (
        <>
            <Menu></Menu>
            <IonPage id="main-content">
                <Header></Header>
                <IonContent fullscreen>
                    <IonGrid>
                        <IonRow>
                            {cands.map((candidate) => (
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
                <Footer></Footer>
            </IonPage>
        </>
    );
};

export default Voter;
