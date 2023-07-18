import { IonMenuButton } from "@ionic/react";

function Account(props: any) {
    return (
        <div style={{ display: "flex" }}>
            <IonMenuButton style={{ paddingTop: "5%" }}></IonMenuButton>
            <p slot="end" style={{ color: "black", paddingLeft: "5%" }}>
                Account: {props.wallet.slice(0, 5)}
            </p>
        </div>
    );
}

export default Account;
