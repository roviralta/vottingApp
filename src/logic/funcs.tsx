import VotingContractABI from "../../artifacts/contracts/VotingContract.sol/VotingContract.json"; // Importa el ABI del contracte
import { ethers } from "ethers";

//direccio del contracte creat, canviar quan es desplegui un de nou
const contractAddress = "0x85461EeD54Cf2741BD290396297b2af1d163009b";

export const cands = [
    {
        id: 0,
        name: "Pedro Sanchez",
        politic: "PSOE",

        description:
            "El PSOE es un partido político de centro-izquierda en España con una larga trayectoria. Se distingue por su compromiso con políticas progresistas, incluyendo la promoción de la igualdad de género, la protección de los derechos laborales y un enfoque en servicios sociales sólidos. El PSOE ha ocupado la presidencia del gobierno en múltiples ocasiones y ha desempeñado un papel fundamental en la construcción de la democracia española.",
    },
    {
        id: 1,
        name: "Santiago Abascal",
        politic: "VOX",

        description:
            "VOX es un partido de derecha en España que ha ganado relevancia en la política española en los últimos años. Sus posiciones se centran en temas como la inmigración, la unidad de España y la seguridad. El partido se caracteriza por adoptar un enfoque de mano dura en cuestiones de seguridad y por defender valores tradicionales en la sociedad española.",
    },
    {
        id: 2,
        name: "Alberto Núñez",
        politic: "PP",

        description:
            " El Partido Popular es un partido de centro-derecha que ha sido una figura importante en la política española. Se destaca por su enfoque en políticas económicas liberales, la promoción de la unidad de España y su historial de gestión económica. El PP ha liderado el gobierno en diversas etapas de la historia política española.",
    },
    {
        id: 3,
        name: "Yolanda Diaz",
        politic: "Sumar",

        description:
            " Sumar es una coalición de partidos políticos valencianos que se unen bajo la bandera de Sumem o Unimos. Esta coalición defiende valores progresistas y está comprometida con la protección de la cultura y lengua valenciana. Su enfoque incluye la lucha por la autonomía de la Comunidad Valenciana y la preservación del patrimonio cultural y medio ambiente. ",
    },
    {
        id: 4,
        name: "Gabriel Rufián",
        politic: "ERC",

        description:
            "ERC es un partido político catalán que aboga por la independencia de Cataluña. Tienen representación en el Congreso de los Diputados y en el Parlamento de Cataluña, y su misión central es avanzar hacia la autodeterminación de Cataluña.",
    },
    {
        id: 5,
        name: "Miriam Nogueras",
        politic: "Junts",

        description:
            "JUNTS es otro partido independentista catalán que trabaja en unidad para lograr la independencia de Cataluña. Han liderado esfuerzos para avanzar hacia la soberanía de Cataluña y han tenido un papel destacado en la política regional.",
    },
    {
        id: 6,
        name: "Roger Montañola",
        politic: "PDeCat",

        description:
            "El PDeCAT es un partido político catalán que se identifica con el catalanismo político. Su objetivo principal es promover los intereses de Cataluña y defender el derecho a la autodeterminación.",
    },
    {
        id: 7,
        name: "Aitor Esteban",
        politic: "PNV",

        description:
            "  El PNV es un partido vasco que aboga por los intereses del País Vasco y la preservación de su cultura. Ha tenido un papel importante en la política vasca y nacional, y ha trabajado por la autonomía y el reconocimiento del País Vasco.",
    },
    {
        id: 8,
        name: "Mertxe Aizpurua",
        politic: "EH Bildu",

        description:
            "EH Bildu es un partido independentista vasco de izquierda que trabaja en favor de los derechos civiles y sociales en el País Vasco. Se han destacado por su compromiso con los derechos humanos y la justicia social.",
    },
    {
        id: 9,
        name: "Néstor Rego",
        politic: "BNG",

        description:
            "El BNG es un partido nacionalista gallego que promueve los intereses de Galicia y su cultura única. Han trabajado por la autonomía y el reconocimiento de Galicia en el contexto español.",
    },
    {
        id: 10,
        name: "Critstina Valido",
        politic: "Coalición Canaria",

        description:
            " Coalición Canaria es una alianza de partidos políticos en Canarias que busca representar los intereses de las Islas Canarias. Han centrado su atención en temas como el turismo, el desarrollo regional y la protección del entorno.",
    },
    {
        id: 11,
        name: "Luis Campos",
        politic: "Nueva Canarias",

        description:
            " Nuevas Canarias es un partido regional que busca mejorar la calidad de vida en Canarias y promover los intereses de la región en el Congreso de los Diputados.",
    },
    {
        id: 12,
        name: "Diego Loras",
        politic: "Coalición Existe",

        description:
            "Coalición Existé es un partido político que se presenta como una alternativa en Castilla y León, enfocándose en el desarrollo regional y la mejora de la calidad de vida de los ciudadanos en esta comunidad.",
    },
    {
        id: 13,
        name: "José Ángel Ceña",
        politic: "Soria YA!",

        description:
            "Soria Ya es un movimiento político que lucha por una mayor inversión y desarrollo en la provincia de Soria, buscando el progreso y la prosperidad de esta región en Castilla y León.",
    },
];

//funcio per a realitzar el vot a un candidat especific
export async function vote(id: any) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
        contractAddress,
        VotingContractABI.abi,
        signer
    );

    const tx = await contract.vote(id);
    await tx.wait();

    getCandidates();
}

//retorna els candidats de les eleccions
export async function getCandidates() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
        contractAddress,
        VotingContractABI.abi,
        signer
    );
    const candidatesList = await contract.getAllVotesOfCandiates();
    const formatCandidates = candidatesList.map(
        (candidate: any, index: any) => {
            return {
                index: index,
                name: candidate.name,
                politic: candidate.politic,
                voteCount: Number(candidate.voteCount.toString()),
            };
        }
    );
    return formatCandidates;
}
