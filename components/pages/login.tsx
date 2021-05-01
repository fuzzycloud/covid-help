import React from "react";
// import { useRouter } from "next/router";
import {
 
  IonButton,
 
  IonSearchbar,
  
  IonContent,
  IonInput,
} from "@ionic/react";

import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonRouterContext,
} from "@ionic/react";

// const router = useRouter();

const Login = () => {
  return (
    <div>
      <IonPage>
        <ion-header>
          <ion-toolbar >
            {/* <ion-buttons slot="start">
              <ion-menu-button></ion-menu-button>
            </ion-buttons> */}
           <ion-title>Login</ion-title>
            
          </ion-toolbar>
        </ion-header>
        <IonContent
          scrollEvents={true}
          onIonScrollStart={() => {}}
          onIonScroll={() => {}}
          onIonScrollEnd={() => {}}
          id="main"
        >
          <ion-card>
          <ion-row
    style={{justifyContent:'center',marginTop:30,}}
  >
    Please Login here
  </ion-row>
  <form style={{padding:10}}>
    <ion-item>
      <IonInput
        type="email"
        placeholder="Enter Email"
        required
      ></IonInput>
    </ion-item>
    <ion-item>
      <ion-input
        type="password"
        placeholder="Enter Password"
        required
      ></ion-input>
    </ion-item>
    <ion-item lines="none">
      <IonButton
        style={{marginLeft:'auto',marginRight:'auto'}}
        fill="outline"
        type="submit"
        size="medium"
        color="tertiary-tint"
        routerLink="/admin">Login</IonButton >
    </ion-item>
  </form></ion-card>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Login;
