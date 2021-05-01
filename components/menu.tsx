
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterContext,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import { cog, flash, list,cart, home, heart,person } from 'ionicons/icons';
import { useHistory, useLocation } from 'react-router-dom';

const pages = [
  {
    title: 'Home',
    icon: home,
    url: '/home',
  },
  {
    title: 'Contact',
    icon: person,
    url: '/contact',
  },
 
];

const Menu = () => {
  // const { StatusBar } = Plugins;

  const ionRouterContext = useContext(IonRouterContext);
  const location = useLocation();

  const [isDark, setIsDark] = useState(false);

  // const handleOpen = async () => {
  //   try {
  //     await StatusBar.setStyle({
  //       style: isDark ? StatusBarStyle.Light : StatusBarStyle.Dark,
  //     });
  //   } catch {}
  // };
  // const handleClose = async () => {
  //   try {
  //     await StatusBar.setStyle({
  //       style: isDark ? StatusBarStyle.Dark : StatusBarStyle.Light,
  //     });
  //   } catch {}
  // };

//   useEffect(() => {
//     setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
//   }, []);

  return (
    <IonMenu side="start" contentId="main"  menuId="first">
      <IonHeader>
        <IonToolbar >
        
          <IonTitle>. Covid Help .</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <IonList>
          {pages.map(p => (
            <IonMenuToggle autoHide={false}>
              <IonItem routerLink={p.url} routerDirection="none" detail={false} lines="full">
                <IonIcon icon={p.icon} slot="start" />
                <IonLabel>{p.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
