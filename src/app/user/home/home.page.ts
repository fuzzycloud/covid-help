import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { TODO } from 'src/app/services/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  Tasks: TODO[];
  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.getTasks().subscribe((res) => {
      this.Tasks = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as TODO
        };
      })
    });
  }
  todoList() {
    this.crudService.getTasks()
    .subscribe((data) => {
      console.log(data)
    })
  }

}
