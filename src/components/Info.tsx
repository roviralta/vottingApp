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
import VotingContractABI from "../../build/contracts/VotingContract.json"; // Importa el ABI del contrato
import { ethers } from "ethers";
import web3 from "web3";
import { log } from "console";

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
    const contractAddress = "0xbAb222a9FF5b2c5A18B772172a56D9f50cD17779";

    const interactWithContract = async () => {
        try {
            // Check if MetaMask or another Ethereum provider is installed
            if (window.ethereum) {
                // Connect to MetaMask or another Ethereum provider
                await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                const provider = new ethers.JsonRpcProvider(
                    "http://localhost:7545"
                );
                const signer = await provider.getSigner();

                // Create a contract instance
                const contract = new ethers.Contract(
                    contractAddress,
                    VotingContractABI.abi,
                    signer
                );

                // Interact with the contract
                const message = await contract.getNumber();
                console.log("Current Greeting:", message);
            } else {
                console.error(
                    "MetaMask or a compatible Ethereum provider is not installed."
                );
            }
        } catch (error) {
            console.error("Error interacting with the contract:", error);
        }
    };

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
            <IonButton fill="clear" onClick={interactWithContract}>
                Vote
            </IonButton>
        </IonModal>
    );
};

export default Info;
