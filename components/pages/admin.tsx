import React from "react";
// import { useRouter } from "next/router";
import {
 
  IonButton,
 
  IonSearchbar,
  
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonBackButton,
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

const Admin = () => {
  return (
    <div>
      <IonPage>
        <ion-header>
          <ion-toolbar >
            {/* <ion-buttons slot="start">
              <ion-menu-button></ion-menu-button>
            </ion-buttons> */}
           <ion-title>Admin</ion-title>
           <ion-buttons slot="start">
            
            <IonBackButton  defaultHref="/"/>
          
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
           <IonItem>
            <IonLabel>Enter State</IonLabel>
            <IonSelect  placeholder="Select One" >
              <IonSelectOption value="f">Gujarat</IonSelectOption>
              <IonSelectOption value="m">Uttar Pradesh</IonSelectOption>
              <IonSelectOption value="m">Goa</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Enter City</IonLabel>
            <IonSelect  placeholder="Select One" >
              <IonSelectOption value="f">Bhavnagar</IonSelectOption>
              <IonSelectOption value="m">Rajkot</IonSelectOption>
              <IonSelectOption value="h">Vadodara</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Enter Services</IonLabel>
            <IonSelect  placeholder="Select One" >
              <IonSelectOption value="f">Oxygen</IonSelectOption>
              <IonSelectOption value="m">Tiffin</IonSelectOption>
              <IonSelectOption value="h">Beds</IonSelectOption>
              <IonSelectOption value="h">Plasma</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
          <IonInput placeholder="Enter Title"></IonInput>
          </IonItem>
          <IonItem>
          <IonInput placeholder="Enter Description"></IonInput>
          </IonItem>
          <IonItem>
          <IonRow>
              <IonCol>
              <IonInput placeholder="Enter Name"></IonInput>
                  </IonCol>              <IonCol><IonInput type="number" placeholder="Enter Number"></IonInput></IonCol>
          </IonRow>
          </IonItem>
          <IonItem>
          <IonRow>
              <IonCol>
              <IonInput placeholder="Enter Name"></IonInput>
                  </IonCol>              <IonCol><IonInput type="number" placeholder="Enter Number"></IonInput></IonCol>
          </IonRow>
          </IonItem>
          <IonItem>
          <IonRow>
              <IonCol>
              <IonInput placeholder="Enter Name"></IonInput>
                  </IonCol>              <IonCol><IonInput type="number" placeholder="Enter Number"></IonInput></IonCol>
          </IonRow>
          </IonItem>
          <IonItem>
          <IonRow>
              <IonCol>
              <IonInput placeholder="Enter Name"></IonInput>
                  </IonCol>              <IonCol><IonInput type="number" placeholder="Enter Number"></IonInput></IonCol>
          </IonRow>
          </IonItem>
          <ion-item lines="none">
      <IonButton
        style={{marginLeft:'auto',marginRight:'auto'}}
        fill="outline"
        type="submit"
        size="medium"
        color="tertiary-tint"
        >Submit</IonButton >
    </ion-item>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Admin;
