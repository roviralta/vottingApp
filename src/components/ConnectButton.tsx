import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { useHistory } from "react-router";

const ConnectButton = () => {
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
        history.push("/voter");
    };

    return (
        <div slot="end">
            {window.ethereum?.isMetaMask &&
                wallet.accounts.length < 1 /* Updated */ && (
                    <button onClick={handleConnect}>Connect MetaMask</button>
                )}

            {/*  {wallet.accounts.length > 0 && (
                <div>Account: {wallet.accounts[0]}</div>
            )} */}
        </div>
    );
};

export default ConnectButton;
