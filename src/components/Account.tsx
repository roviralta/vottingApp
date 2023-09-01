function Account(props: any) {
    return (
        <div>
            <p
                slot="end"
                style={{
                    color: "black",
                    marginTop: "10px",
                    marginLeft: "20px",
                }}
            >
                <b>Account: {props.wallet.slice(0, 5)}</b>
            </p>
        </div>
    );
}

export default Account;
