import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(  private fireStore: AngularFirestore,
    private router: Router) { }

    getUserDoc(id) {
      return this.fireStore
      .collection('service')
      .doc(id)
      .valueChanges()
    }

    getUserList() { 
      return this.fireStore
      .collection("service")
      .snapshotChanges();
    }

    createUser(user: User) {
      return new Promise<any>((resolve, reject) =>{
        this.fireStore
          .collection("service")
          .add(user)
          .then(response => { console.log(response) }, error => reject(error));
      });
    }
}
