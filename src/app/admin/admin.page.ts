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
  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder,    
    private router: Router
  ) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      state:['',[Validators.required, Validators.minLength(2)]],
      city:[''],
      service:[''],
      title: [''],
      description: [''],
      items: this.formBuilder.array([ this.createItem() ])
      // nameOne:[''],
      // numberOne:[''],
      // nameTwo:[''],
      // numberTwo:[''],
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
    if (!this.todoForm.valid) {
      return false;
    }
     else {
      this.crudService.create(this.todoForm.value)
      .then(() => {
        this.todoForm.reset();
        console.log("data added");
        this.router.navigate(['/user/home']);
      }).catch((err) => {
        console.log(err)
      });
    }
  }

}
