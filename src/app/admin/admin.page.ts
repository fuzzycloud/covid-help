import { Component, OnInit } from '@angular/core';

import { CrudService } from './../services/crud.service';
import { FormGroup, FormBuilder,FormArray ,Validators } from "@angular/forms";

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  
  public userForm: FormGroup;
  items: FormArray;
  todoForm: FormGroup;
  isSubmitted = false;
  data: any;
  constructor(
    private crudService: CrudService,
    private authServices: AuthService,
    public formBuilder: FormBuilder,    
    private router: Router
  ) { 
    this.userForm = this.formBuilder.group({
      state:['',[Validators.required]],
      city:['',[Validators.required]],
      service:['',[Validators.required]],
      title: [''],
      description: [''],
      items: this.formBuilder.array([ this.createItem() ])
    })   
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      name: ['',[Validators.required]],
      number: ['',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    });
  }
  addItem(): void {
    this.items = this.userForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  removeItems(i:number) {
    this.items.removeAt(i);
  }
  onSubmit() {
    this.crudService.createUser(this.userForm.value);
    console.log(this.userForm.value);
    if(this.userForm.valid){
      this.router.navigate(['user/home']); 
    }
    
   };
  ngOnInit() {   
  }
 
}
