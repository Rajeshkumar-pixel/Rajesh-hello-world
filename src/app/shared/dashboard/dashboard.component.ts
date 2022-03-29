import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selected:number=1
  accountId:string="5000"
  constructor() { }

  ngOnInit(): void {
  }

  productGroupSelected(eve:any): void {
console.log("22",eve)
  }
}
