interface PropAccount {
    wallet: any;
}

const Account: React.FC<PropAccount> = ({ wallet }) => {
    return <div slot="end">Account: {wallet}</div>;
};

export default Account;
