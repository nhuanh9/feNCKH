import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-exp-order',
  templateUrl: './list-exp-order.component.html',
  styleUrls: ['./list-exp-order.component.css']
})
export class ListExpOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  confirmDelete() {
    confirm("Bạn có chắc chắn xoá không?");
  }
}
