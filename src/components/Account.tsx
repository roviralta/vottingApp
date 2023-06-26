interface PropAccount {
    wallet: string;
}

const Account: React.FC<PropAccount> = ({ wallet }) => {
    return <div slot="end"> Account: {wallet.slice(0, 10)}</div>;
};

export default Account;
