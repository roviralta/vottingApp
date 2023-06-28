interface PropAccount {
    wallet: string;
}

const Account: React.FC<PropAccount> = ({ wallet }) => {
    return <p slot="end">Account: {wallet.slice(0, 10)}</p>;
};

export default Account;
