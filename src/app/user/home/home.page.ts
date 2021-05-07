import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { User } from 'src/app/user.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  Users: User[];
  constructor(private crudService: CrudService) { }
  selectedState: string = '';
  selectedCity: string = '';
  selectedServices: string = '';
  //event handler for the select element's change event
  selectChangeState (event: any) {
    //update the ui    
    this.selectedState = event.target.value;
   
  }
  selectChangeCity (event: any) {
    //update the ui    
    this.selectedCity = event.target.value;
   
  }
  selectChangeService (event: any) {
    //update the ui    
    this.selectedServices = event.target.value;
   
  }
  ngOnInit() {
   
    this.crudService.getUserList().subscribe(res => {
      this.Users = res.map( e => {
        return {
          id: e.payload.doc.id,
          state:e.payload.doc.data(),
                city:e.payload.doc.data(),
                service:e.payload.doc.data(),
                title:e.payload.doc.data(),
                description:e.payload.doc.data(),
                name:e.payload.doc.data(),   
                number:e.payload.doc.data()             
        } as User;
      })
    });  
    console.log(this.Users);  
  }
 

}
