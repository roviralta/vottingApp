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
                "El PSOE es un partido político de centro-izquierda en España con una larga trayectoria. Se distingue por su compromiso con políticas progresistas, incluyendo la promoción de la igualdad de género, la protección de los derechos laborales y un enfoque en servicios sociales sólidos. El PSOE ha ocupado la presidencia del gobierno en múltiples ocasiones y ha desempeñado un papel fundamental en la construcción de la democracia española.",
        },
        {
            id: 1,
            name: "Santiago Abascal",
            politic: "VOX",
            imageUrl: abascal,
            description:
                "VOX es un partido de derecha en España que ha ganado relevancia en la política española en los últimos años. Sus posiciones se centran en temas como la inmigración, la unidad de España y la seguridad. El partido se caracteriza por adoptar un enfoque de mano dura en cuestiones de seguridad y por defender valores tradicionales en la sociedad española.",
        },
        {
            id: 2,
            name: "Alberto Núñez",
            politic: "PP",
            imageUrl: alberto,
            description:
                " El Partido Popular es un partido de centro-derecha que ha sido una figura importante en la política española. Se destaca por su enfoque en políticas económicas liberales, la promoción de la unidad de España y su historial de gestión económica. El PP ha liderado el gobierno en diversas etapas de la historia política española.",
        },
        {
            id: 3,
            name: "Yolanda Diaz",
            politic: "Sumar",
            imageUrl: yolanda,
            description:
                " Sumar es una coalición de partidos políticos valencianos que se unen bajo la bandera de Sumem o Unimos. Esta coalición defiende valores progresistas y está comprometida con la protección de la cultura y lengua valenciana. Su enfoque incluye la lucha por la autonomía de la Comunidad Valenciana y la preservación del patrimonio cultural y medio ambiente. ",
        },
        {
            id: 4,
            name: "Gabriel Rufián",
            politic: "ERC",
            imageUrl: rufian,
            description:
                "ERC es un partido político catalán que aboga por la independencia de Cataluña. Tienen representación en el Congreso de los Diputados y en el Parlamento de Cataluña, y su misión central es avanzar hacia la autodeterminación de Cataluña.",
        },
        {
            id: 5,
            name: "Miriam Nogueras",
            politic: "Junts",
            imageUrl: miriam,
            description:
                "JUNTS es otro partido independentista catalán que trabaja en unidad para lograr la independencia de Cataluña. Han liderado esfuerzos para avanzar hacia la soberanía de Cataluña y han tenido un papel destacado en la política regional.",
        },
        {
            id: 6,
            name: "Roger Montañola",
            politic: "PDeCat",
            imageUrl: roger,
            description:
                "El PDeCAT es un partido político catalán que se identifica con el catalanismo político. Su objetivo principal es promover los intereses de Cataluña y defender el derecho a la autodeterminación.",
        },
        {
            id: 7,
            name: "Aitor Esteban",
            politic: "PNV",
            imageUrl: aitor,
            description:
                "  El PNV es un partido vasco que aboga por los intereses del País Vasco y la preservación de su cultura. Ha tenido un papel importante en la política vasca y nacional, y ha trabajado por la autonomía y el reconocimiento del País Vasco.",
        },
        {
            id: 8,
            name: "Mertxe Aizpurua",
            politic: "EH Bildu",
            imageUrl: mertxe,
            description:
                "EH Bildu es un partido independentista vasco de izquierda que trabaja en favor de los derechos civiles y sociales en el País Vasco. Se han destacado por su compromiso con los derechos humanos y la justicia social.",
        },
        {
            id: 9,
            name: "Néstor Rego",
            politic: "BNG",
            imageUrl: nestor,
            description:
                "El BNG es un partido nacionalista gallego que promueve los intereses de Galicia y su cultura única. Han trabajado por la autonomía y el reconocimiento de Galicia en el contexto español.",
        },
        {
            id: 10,
            name: "Critstina Valido",
            politic: "Coalición Canaria",
            imageUrl: cristina,
            description:
                " Coalición Canaria es una alianza de partidos políticos en Canarias que busca representar los intereses de las Islas Canarias. Han centrado su atención en temas como el turismo, el desarrollo regional y la protección del entorno.",
        },
        {
            id: 11,
            name: "Luis Campos",
            politic: "Nueva Canarias",
            imageUrl: luis,
            description:
                " Nuevas Canarias es un partido regional que busca mejorar la calidad de vida en Canarias y promover los intereses de la región en el Congreso de los Diputados.",
        },
        {
            id: 12,
            name: "Diego Loras",
            politic: "Coalición Existe",
            imageUrl: diego,
            description:
                "Coalición Existé es un partido político que se presenta como una alternativa en Castilla y León, enfocándose en el desarrollo regional y la mejora de la calidad de vida de los ciudadanos en esta comunidad.",
        },
        {
            id: 13,
            name: "José Ángel Ceña",
            politic: "Soria YA!",
            imageUrl: jose,
            description:
                "Soria Ya es un movimiento político que lucha por una mayor inversión y desarrollo en la provincia de Soria, buscando el progreso y la prosperidad de esta región en Castilla y León.",
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
