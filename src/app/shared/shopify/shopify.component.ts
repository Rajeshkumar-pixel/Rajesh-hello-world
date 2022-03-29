import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopify',
  templateUrl: './shopify.component.html',
  styleUrls: ['./shopify.component.scss']
})
export class ShopifyComponent implements OnInit {
  @Input('settings') settings:any
  @Output() customizationValueChange = new EventEmitter();
  constructor() {
   }

  ngOnInit(): void {
    console.log("asdas",this.settings)
  }

  click(){
    this.customizationValueChange.emit('changes for Output')
  }
}
