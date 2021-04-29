import React from "react";
// import { useRouter } from "next/router";
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonMenuButton,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonList,
  IonContent,
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
const nav = document.querySelector('ion-nav');
function showDetail() {
  // const tech = techs.find(tech => tech.title === title);
  // router.push('recipe');
}
const List = () => {
  return (
    <div>
      <IonPage>
        <ion-header>
          <ion-toolbar >
            {/* <ion-buttons slot="start">
              <IonBackButton></IonBackButton>
            </ion-buttons> */}

            <ion-buttons slot="start">
            
          <IonBackButton text="Back to Home" defaultHref="/"/>
        
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
          <IonSearchbar placeholder="Search here" color="success-tint" />
          <div style={{padding:5}}>
              <ion-list>
              <ion-card>
              <IonCardHeader>
            
            <IonCardTitle>Title comes here</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
            <ion-row><h4 style={{fontWeight:"bold",color:'black'}}>Name :&nbsp;</h4>&nbsp; <a>+91-9823456678</a></ion-row>
            <ion-row><h4 style={{fontWeight:"bold",color:'black'}}>Name :&nbsp;</h4>&nbsp; <a>+91-9823456678</a></ion-row>
            <ion-row><h4 style={{fontWeight:"bold",color:'black'}}>Name :&nbsp;</h4>&nbsp; <a>+91-9823456678</a></ion-row>
      </IonCardContent>
</ion-card>
<ion-card>
              <IonCardHeader>
            
            <IonCardTitle>Title comes here</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
            <ion-row><h4 style={{fontWeight:"bold",color:'black'}}>Name :&nbsp;</h4>&nbsp; <a>+91-9823456678</a></ion-row>
            <ion-row><h4 style={{fontWeight:"bold",color:'black'}}>Name :&nbsp;</h4>&nbsp; <a>+91-9823456678</a></ion-row>
            <ion-row><h4 style={{fontWeight:"bold",color:'black'}}>Name :&nbsp;</h4>&nbsp; <a>+91-9823456678</a></ion-row>
      </IonCardContent>
</ion-card>
<ion-card>
              <IonCardHeader>
            
            <IonCardTitle>Title comes here</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
            <ion-row><h4 style={{fontWeight:"bold",color:'black'}}>Name :&nbsp;</h4>&nbsp; <a>+91-9823456678</a></ion-row>
            <ion-row><h4 style={{fontWeight:"bold",color:'black'}}>Name :&nbsp;</h4>&nbsp; <a>+91-9823456678</a></ion-row>
            <ion-row><h4 style={{fontWeight:"bold",color:'black'}}>Name :&nbsp;</h4>&nbsp; <a>+91-9823456678</a></ion-row>
      </IonCardContent>
</ion-card>
              </ion-list>
         
  </div>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default List;
