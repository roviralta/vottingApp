import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { IonButton, IonIcon, IonLabel } from "@ionic/react";
import metamask from "../assets/MetaMask_Fox.svg.png";
import { personCircleOutline } from "ionicons/icons";
import { ethers } from "ethers";

function ConnectButton() {
    const [hasProvider, setHasProvider] = useState<boolean | null>(null);
    const initialState = { accounts: [] };
    const [wallet, setWallet] = useState(initialState);
    const [account, setAccount] = useState("");
    const [provider, setProvider] = useState("");

    useEffect(() => {
        const refreshAccounts = (accounts: any) => {
            if (accounts.length > 0) {
                updateWallet(accounts);
            } else {
                // if length 0, user is disconnected
                setWallet(initialState);
            }
        };

        const getProvider = async () => {
            const provider = await detectEthereumProvider({ silent: true });
            setHasProvider(Boolean(provider));

            if (provider) {
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
                });
                refreshAccounts(accounts);
                window.ethereum.on("accountsChanged", refreshAccounts);
            }
        };

        getProvider();
        return () => {
            window.ethereum?.removeListener("accountsChanged", refreshAccounts);
        };
    }, []);

    const updateWallet = async (accounts: any) => {
        setWallet({ accounts });
    };

    const handleConnect = async () => {
        let accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        updateWallet(accounts);
    };

    if (wallet.accounts.length <= 0) {
        return (
            <div>
                {window.ethereum?.isMetaMask &&
                    wallet.accounts.length < 1 /* Updated */ && (
                        <IonButton fill="clear" onClick={handleConnect}>
                            <img id="icon" src={metamask}></img>
                            <p>{account}</p>
                        </IonButton>
                    )}
            </div>
        );
    } else {
        return (
            <IonButton fill="clear" href="/profile">
                <IonIcon
                    style={{
                        fontSize: "45px",
                        color: "black",
                    }}
                    icon={personCircleOutline}
                />
            </IonButton>
        );
    }
}

export default ConnectButton;
