import { useEffect, useState } from "react";
import { IonPage, IonContent, IonImg } from "@ionic/react";
import Header from "../components/Header";
import { formatBalance, formatChainAsNum } from "../components/index";
import detectEthereumProvider from "@metamask/detect-provider";
import "./variables.css";
import metamask from "../assets/MetaMask_Fox.svg.png";

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
                <div className="profile-container">
                    <IonImg src={metamask}></IonImg>
                    <h2 style={{ color: "#333" }}>Your Wallet Information:</h2>
                    <b>Ethereum Account: </b>

                    <div
                        style={{
                            paddingTop: "5px",
                            paddingBottom: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {wallet.accounts[0]}
                    </div>

                    <div className="wallet-balance">
                        <b>Wallet Balance:</b> {wallet.balance} ETH
                    </div>
                    <div className="profile">
                        <b>Hex ChainId: </b>
                        {wallet.chainId}
                    </div>
                    <div className="profile">
                        <b> Numeric ChainId: </b>
                        {formatChainAsNum(wallet.chainId)}
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
