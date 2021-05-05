import { Component, OnInit } from '@angular/core';

import { CrudService } from './../services/crud.service';
import { FormGroup, FormBuilder,FormArray ,Validators } from "@angular/forms";

import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  // orderForm: FormGroup;
  items: FormArray;
  todoForm: FormGroup;
  isSubmitted = false;
  data: any;
  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder,    
    private router: Router
  ) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      id:[''],
      state:['',[Validators.required, Validators.minLength(2)]],
      city:[''],
      service:[''],
      title: [''],
      description: [''],
      items: this.formBuilder.array([ this.createItem() ])
     
    })
    
    
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      number: ['',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    });
  }
  addItem(): void {
    this.items = this.todoForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  get errorControl() {
    return this.todoForm.controls;
  }
  onSubmit() {
    this.isSubmitted = true;
    this.data=this.todoForm.value;
    if (!this.todoForm.valid) {
      return false;
    }
     else {
      this.crudService.create(this.data)
      .then(() => {
        this.todoForm.reset();
        console.log("data added",this.data);
        this.router.navigate(['/user/home']);
      }).catch((err) => {
        console.log(err)
      });
    }
  }

}


