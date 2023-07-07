import { IonContent, IonPage } from "@ionic/react";
import "./variables.css";
import ConnectButton from "../components/ConnectButton";
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

const Voter = () => {
    const cands = [
        {
            id: 0,
            name: "Pedro Sanchez",
            description: "PSOE",
            imageUrl: pedro,
        },
        {
            id: 1,
            name: "Santiago Abascal",
            description: "VOX",
            imageUrl: abascal,
        },
        {
            id: 2,
            name: "Alberto Núñez",
            description: "PP",
            imageUrl: alberto,
        },
        {
            id: 3,
            name: "Yolanda Diaz",
            description: "Sumar",
            imageUrl: yolanda,
        },
        {
            id: 4,
            name: "Gabriel Rufián",
            description: "ERC",
            imageUrl: rufian,
        },
        {
            id: 5,
            name: "Miriam Nogueras",
            description: "Junts",
            imageUrl: miriam,
        },
        {
            id: 6,
            name: "Roger Montañola",
            description: "PDeCat",
            imageUrl: roger,
        },
        {
            id: 7,
            name: "Aitor Esteban",
            description: "PNV",
            imageUrl: aitor,
        },
        {
            id: 8,
            name: "Mertxe Aizpurua",
            description: "EH Bildu",
            imageUrl: mertxe,
        },
        {
            id: 9,
            name: "Néstor Rego",
            description: "BNG",
            imageUrl: nestor,
        },
        {
            id: 10,
            name: "Critstina Valido",
            description: "Coalici'on Canaria",
            imageUrl: cristina,
        },
        {
            id: 11,
            name: "Luis Campos",
            description: "Nueva Canarias",
            imageUrl: luis,
        },
        {
            id: 12,
            name: "Diego Loras",
            description: "Coalición Existe",
            imageUrl: diego,
        },
        {
            id: 13,
            name: "José Ángel Ceña",
            description: "Soria YA!",
            imageUrl: jose,
        },
    ];

    return (
        <>
            <Menu></Menu>
            <IonPage id="main-content">
                <Header></Header>
                <IonContent fullscreen>
                    <Candidate candidates={cands}></Candidate>
                </IonContent>
                <Footer></Footer>
            </IonPage>
        </>
    );
};

export default Voter;
