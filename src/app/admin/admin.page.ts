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
  selectedCountry = 0;
selectedState = 0;
 
states = [];
cities = [];

  items: FormArray;
  todoForm: FormGroup;
  isSubmitted = false;
  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder,    
    private router: Router
  ) { }
  onSelectCountry(country_id: number) {
    this.selectedCountry = country_id;
    this.selectedState = 0;
    this.cities = [];
    this.states = this.getStates().filter((item) => {
    return item.country_id === Number(country_id)
    });
    }
    getCountries() {
      return [
      { id: 1, name: 'Country1' },
      { id: 2, name: 'Country2' },
      { id: 3, name: 'Country3' }
      ];
      }
  onSelectState(state_id: number) {
    this.selectedState = state_id;
    this.cities = this.getCity().filter((item) => {
    return item.state_id === Number(state_id)
    });
    }
    getStates() {
      return [
      { id: 1, country_id: 1, name: 'State1 of country1' },
      { id: 2, country_id: 1, name: 'State2 of country2' },
      { id: 3, country_id: 2, name: 'State1 of country2' },
      { id: 4, country_id: 2, name: 'State2 of country2' },
      { id: 5, country_id: 3, name: 'State1 of country3' },
      { id: 6, country_id: 3, name: 'State2 of country3' },
      ]
      }
    getCity() {
      return [
      { id: 1, state_id: 1, name: 'City1' },
      { id: 2, state_id: 1, name: 'City11' },
      { id: 3, state_id: 1, name: 'City12' },
      { id: 4, state_id: 1, name: 'City13' },
      { id: 5, state_id: 2, name: 'City14' },
      { id: 6, state_id: 2, name: 'City15' },
      { id: 7, state_id: 2, name: 'City16' },
      { id: 8, state_id: 2, name: 'City17' },
      { id: 9, state_id: 3, name: 'City18' },
      { id: 10, state_id: 3, name: 'City19' },
      { id: 11, state_id: 3, name: 'City20' },
      { id: 12, state_id: 4, name: 'City21' },
      { id: 13, state_id: 4, name: 'City23' },
      { id: 14, state_id: 5, name: 'City24' },
      { id: 15, state_id: 5, name: 'City25' },
      { id: 16, state_id: 5, name: 'City26' },
      { id: 17, state_id: 6, name: 'City27' },
      { id: 18, state_id: 6, name: 'City28' },
      ]
      }
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
