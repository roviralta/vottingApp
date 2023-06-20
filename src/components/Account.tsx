import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { IonButton } from "@ionic/react";
import { useHistory } from "react-router";

interface PropAccount {
    wallet: string;
}

const Account: React.FC<PropAccount> = ({ wallet }) => {
    if (true) {
        <div slot="end">Account: {wallet}</div>;
    }
};

export default Account;
