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

    /* const interactWithContract = async () => {
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
                const message = await contract.speak();
                console.log("Current Greeting:", message);
            } else {
                console.error(
                    "MetaMask or a compatible Ethereum provider is not installed."
                );
            }
        } catch (error) {
            console.error("Error interacting with the contract:", error);
        }
    }; */

    async function speak() {
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

            const tx = await VotingContract.speak();
            console.log(tx);

            alert("Number set successfully!");
        } catch (error) {
            console.error("Error setting number:", error);
            alert(
                "Error setting number. Please check the console for details."
            );
        }
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
            <IonButton fill="clear" onClick={speak}>
                Vote
            </IonButton>
        </IonModal>
    );
};

export default Info;
