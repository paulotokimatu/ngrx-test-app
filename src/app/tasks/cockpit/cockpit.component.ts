import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  taskInput: string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
