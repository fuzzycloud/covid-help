import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { TODO } from './user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private ngFirestore: AngularFirestore,
    private router: Router) { }
  create(todo: TODO) {
    return this.ngFirestore.collection('service').add(todo);
  }

  getTasks() {
    return this.ngFirestore.collection('service').snapshotChanges();
  }

  getTask(id) {
    return this.ngFirestore.collection('service').doc(id).valueChanges();
  }
}
