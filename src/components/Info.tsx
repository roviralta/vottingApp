import React, { useEffect, useState } from "react";
import {
    IonButton,
    IonModal,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import "../pages/variables.css";
import VotingContractABI from "../../artifacts/contracts/VotingContract.sol/VotingContract.json"; // Importa el ABI del contrato
import { ethers } from "ethers";
import { format } from "path";

interface Candidate {
    id: number;
    name: string;
    politic: string;
    imageUrl: string;
    description: string;
}

interface MyModalProps {
    isOpen: boolean;
    onClose: () => void;
    candidate: Candidate;
}

const Info: React.FC<MyModalProps> = ({ isOpen, onClose, candidate }) => {
    const contractAddress = "0x189A9Bd609f16DdEC93a21E4C1792aC0Faf4fB63";
    const [CanVote, setCanVote] = useState(true);
    const [candidates, setCandidates] = useState([]);

    /*  async function speak() {
        try {
            // Replace with the actual contract address
            const contractAddress =
                "0xc4F05781605A558dE4534CdCcdaBC80d9966b763";
            const [account] = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const provider = new ethers.JsonRpcProvider(
                "HTTP://127.0.0.1:7545"
            );
            const signer = await provider.getSigner();

            const VotingContract = new ethers.Contract(
                contractAddress,
                VotingContractABI.abi,
                signer
            );

            console.log(VotingContract);

            const tx = await VotingContract.getAllVotesOfCandiates();
            console.log(tx);

            alert("Number set successfully!");
        } catch (error) {
            console.error("Error setting number:", error);
            alert(
                "Error setting number. Please check the console for details."
            );
        }
    } */

    /*  useEffect(() => {
        getCandidates();
    }); */

    async function vote(id: any) {
        const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(
            contractAddress,
            VotingContractABI.abi,
            signer
        );
        const tx = await contract.vote(id);
        await tx.wait();
        canVote();
        getCandidates();
    }

    async function canVote() {
        const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(
            contractAddress,
            VotingContractABI.abi,
            signer
        );
        const voteStatus = await contract.hasVoted(await signer.getAddress());
        setCanVote(voteStatus);
    }

    async function getCandidates() {
        const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");
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
                    voteCount: candidate.voteCount,
                };
            }
        );
        setCandidates(formatCandidates);
        console.log(formatCandidates);
    }

    return (
        <IonModal id="example-modal" isOpen={isOpen} onDidDismiss={onClose}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Information</IonTitle>
                    <IonButton fill="clear" slot="end" onClick={onClose}>
                        Close
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2 style={{ marginLeft: "10px" }}>{candidate.name}</h2>
                <h4 style={{ marginLeft: "10px" }}>{candidate.politic}</h4>
                <p
                    style={{
                        textAlign: "justify",
                        marginLeft: "10px",
                        marginRight: "10px",
                    }}
                >
                    {candidate.description}
                </p>
            </IonContent>
            <IonButton fill="clear" onClick={() => vote(candidate.id)}>
                Vote
            </IonButton>
        </IonModal>
    );
};

export default Info;
