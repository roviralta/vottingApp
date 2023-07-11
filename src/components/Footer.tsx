import { IonFooter, IonButton, IonIcon } from "@ionic/react";
import { logoInstagram, logoTwitter, logoFacebook } from "ionicons/icons";

function Footer() {
    return (
        <IonFooter>
            <div className="footer-div">
                <IonButton fill="clear">
                    <IonIcon icon={logoInstagram}></IonIcon>
                </IonButton>
                <IonButton fill="clear">
                    {" "}
                    <IonIcon icon={logoTwitter}></IonIcon>
                </IonButton>
                <IonButton fill="clear">
                    {" "}
                    <IonIcon icon={logoFacebook}></IonIcon>
                </IonButton>
            </div>
        </IonFooter>
    );
}

export default Footer;
