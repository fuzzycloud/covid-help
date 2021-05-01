import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage } from "@ionic/react";
import React from "react";

const Contact = () => {
    return (
      <div>
          <IonPage>
        <ion-header>
          <ion-toolbar >
              <ion-title>Contact Us</ion-title>
            <ion-buttons slot="start">
              <ion-menu-button></ion-menu-button>
            </ion-buttons>

            
          </ion-toolbar>
        </ion-header>
        <IonContent
          scrollEvents={true}
          onIonScrollStart={() => {}}
          onIonScroll={() => {}}
          onIonScrollEnd={() => {}}
          id="main"
        >
         
          <div style={{padding:5}}>
          <ion-card>
         <ion-header>
           <ion-label>Contact Us</ion-label>
         </ion-header>
         <ion-card-content>
         <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Full Name</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Write your message here..</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonButton color="success" fill="outline" size="medium">Send</IonButton>
          </IonItem>
         </ion-card-content>
       </ion-card>
  </div>
        </IonContent>
      </IonPage>
          
          </div>
    )
}
export default Contact;