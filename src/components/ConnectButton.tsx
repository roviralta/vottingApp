import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { useHistory } from "react-router";
import Account from "./Account";
import { IonButton } from "@ionic/react";

function ConnectButton() {
    const [hasProvider, setHasProvider] = useState<boolean | null>(null);
    const initialState = { accounts: [] };
    const [wallet, setWallet] = useState(initialState);
    const history = useHistory();

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
        history.push("/home");
    };

    if (wallet.accounts.length <= 0) {
        return (
            <div slot="start">
                {window.ethereum?.isMetaMask &&
                    wallet.accounts.length < 1 /* Updated */ && (
                        <IonButton onClick={handleConnect}>
                            Connect MetaMask
                        </IonButton>
                    )}
            </div>
        );
    } else {
        return <Account wallet={wallet.accounts[0]}></Account>;
    }
}

export default ConnectButton;
