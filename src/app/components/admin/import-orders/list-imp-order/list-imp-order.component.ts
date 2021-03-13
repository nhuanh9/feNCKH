import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-imp-order',
  templateUrl: './list-imp-order.component.html',
  styleUrls: ['./list-imp-order.component.css']
})
export class ListImpOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  confirmDelete() {
    confirm("Bạn có chắc chắn xoá không?");
  }
}
