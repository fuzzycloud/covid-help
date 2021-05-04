import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { cfaSignIn, cfaSignOut } from 'capacitor-firebase-auth';
import { CapacitorService } from './capacitor.service';
import { fromPromise } from 'rxjs/internal-compatibility';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  constructor(   
    private auth: AngularFireAuth,
    private capacitorService: CapacitorService    
  ) {  
  }
  
  googleSignIn(): Observable<firebase.User> {
    return cfaSignIn('google.com');
  }

  logout(): Observable<void> {
    return cfaSignOut();
  }

  get isAuthenticated(): Observable<boolean> {
    return this.auth.authState.pipe(map((x) => x !== null));
  }

  get currentUser(): Observable<firebase.User | null> {
    return this.auth.authState;
  }

  get displayName(): Observable<string | null | undefined> {
    return this.auth.authState.pipe(map((x) => x?.displayName));
  }

  get currentUserId(): Observable<string | undefined> {
    return this.auth.authState.pipe(map((x) => x?.uid));
  }

  

}
