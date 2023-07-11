import { IonMenuButton } from "@ionic/react";
interface PropAccount {
    wallet: string;
}

const Account: React.FC<PropAccount> = ({ wallet }) => {
    return (
        <div style={{ display: "flex" }}>
            {/* <img id="icon" src={metamask} style={{ paddingTop: "10%" }}></img> */}
            <IonMenuButton style={{ paddingTop: "5%" }}></IonMenuButton>
            <p slot="end" style={{ color: "black", paddingLeft: "5%" }}>
                Account: {wallet.slice(0, 5)}
            </p>
        </div>
    );
};

export default Account;
