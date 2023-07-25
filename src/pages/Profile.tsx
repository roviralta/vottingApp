import React, { useEffect, useState } from "react";
import { IonPage, IonContent } from "@ionic/react";
import Header from "../components/Header";
import { formatBalance, formatChainAsNum } from "../components/index";
import detectEthereumProvider from "@metamask/detect-provider";

const Profile = () => {
    const [hasProvider, setHasProvider] = useState<boolean | null>(null);
    const initialState = {
        accounts: [],
        balance: "",
        chainId: "",
    }; /* Updated */
    const [wallet, setWallet] = useState(initialState);

    useEffect(() => {
        const refreshAccounts = (accounts: any) => {
            if (accounts.length > 0) {
                updateWallet(accounts);
            } else {
                // if length 0, user is disconnected
                setWallet(initialState);
            }
        };

        const refreshChain = (chainId: any) => {
            setWallet((wallet) => ({ ...wallet, chainId }));
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
                window.ethereum.on("chainChanged", refreshChain);
            }
        };

        getProvider();

        return () => {
            window.ethereum?.removeListener("accountsChanged", refreshAccounts);
            window.ethereum?.removeListener("chainChanged", refreshChain);
        };
    }, []);

    const updateWallet = async (accounts: any) => {
        const balance = formatBalance(
            await window.ethereum!.request({
                method: "eth_getBalance",
                params: [accounts[0], "latest"],
            })
        );
        const chainId = await window.ethereum!.request({
            method: "eth_chainId",
        });
        setWallet({ accounts, balance, chainId }); /* Updated */
    };

    return (
        <IonPage>
            <Header></Header>
            <IonContent>
                <div>
                    <h2>Your MetaMask Wallet Information:</h2>
                    <p>Ethereum Account: {wallet.accounts[0]}</p>
                </div>
                <div>Wallet Balance: {wallet.balance} ETH</div> {/* New */}
                <div>Hex ChainId: {wallet.chainId}</div> {/* New */}
                <div>
                    Numeric ChainId: {formatChainAsNum(wallet.chainId)}
                </div>{" "}
                {/* New */}
            </IonContent>
        </IonPage>
    );
};

export default Profile;
