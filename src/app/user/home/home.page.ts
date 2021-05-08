import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { User } from 'src/app/user.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  Users: User[];
  data: any;
  form: FormGroup;
  constructor(private crudService: CrudService,private fb:FormBuilder) { this.createForm();} 
  
  stateList: any = [ {
    id: '1',
    title: 'Gujarat',
   
  }, {
    id: '2',
    title: 'Maharashtra',
   
  }, ]
  cityList:any=[ {
    id: '1',
    title: 'Surat',
   
  }, {
    id: '2',
    title: 'Baroda',
  }]
  serviceList:any=[ {
    id: '1',
    title: 'Tiffin',
   
  }, {
    id: '2',
    title: 'Oxygen',
  }]
  createForm() {
    this.form = this.fb.group({
      state: new FormControl('', Validators.required),
    city:new FormControl('',Validators.required),
    service:new FormControl('',Validators.required)
  }
    )
}
  submit(){
    this.data=this.form.value;
    console.log(this.data);

  }
  
  ngOnInit() {

    // this.crudService.getUserList().subscribe(res => {
    //   this.Users = res.map( e => {
    //     return {
    //       id: e.payload.doc.id,
    //       state:e.payload.doc.data(),
    //             city:e.payload.doc.data(),
    //             service:e.payload.doc.data(),
    //             title:e.payload.doc.data(),
    //             description:e.payload.doc.data(),
    //             name:e.payload.doc.data(),   
    //             number:e.payload.doc.data()             
    //     } as User;
    //   })
    // });  
    // console.log(this.Users);  
  }
  // submit() {
  //   console.log("Form Submitted")
  //   console.log(this.contactForm.value)
  // }


  // Crud operation.....................
  mockData: any = [
    {
      id: '1',
      title: 'Gujarat',
     
    }, {
      id: '2',
      title: 'Maha',
     
    }, {
      id: '3',
      title: 'Kerala',
   
    }, {
      id: '4',
      title: 'Uk',
     
    }
  ];
  show: boolean = false;
  value: string;
  id: number;
  remove(id) {
    this.mockData = this.mockData.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }
  create(item) {
    this.stateList.push({
      id: Date.now(),
      title: item,
    });
    this.mockData.push({
      id: Date.now(),
      title: item,
    });
    // this.serviceList.push({
    //   id: Date.now(),
    //   title: item,
    // })
  }
  update(title) {
    this.mockData.map(item => {
      if (item.id === this.id) {
        item['title'] = title;
      }
    });

    this.show = false;
  }
  edit(id, title) {
    this.show = true;
    this.value = title;
    this.id = id;
  }

  setTaskComplete(id) {
    this.mockData.map(item => {
      if (item.id === id) {
        item['done'] = true;
      }
    });
  }

}
